extends Node

export (PackedScene) var Enemy
var screensize = Vector2()
var level = 0
var score = 0
var playing = false

func game_over():
	playing = false
	$HUD.game_over()

func new_game():
	for enemy in $Enemies.get_children():
		enemy.queue_free()
	level = 0
	score = 0
	$HUD.update_score(score)
	$Player.start()
	$HUD.show_message("Get Ready!")
	yield($HUD/MessageTimer, "timeout")
	playing = true
	new_level()

func new_level():
	level += 1
	$HUD.show_message("Wave %s" % level)
	for i in range(level):
		spawn_enemy(3)

func _process(delta):
	if playing and $Enemies.get_child_count() == 0:
		new_level()

func _ready():
	randomize()
	screensize = get_viewport().get_visible_rect().size
	$Player.screensize = screensize
#	for i in range(3):
#		spawn_enemy(3)

func spawn_enemy(size, pos=null, vel=null):
	if !pos:
		$EnemyPath/EnemySpawn.set_offset(randi())
		pos = $EnemyPath/EnemySpawn.position
	if !vel:
		vel = Vector2(1, 0).rotated(rand_range(0, 2 * PI)) * rand_range(100, 150)
	var e = Enemy.instance()
	e.screensize = screensize
	e.start(pos, vel, size)
	$Enemies.add_child(e)
	e.connect('exploded', self, 'on_Enemy_exploded')
	
func on_Enemy_exploded(size, radius, pos, vel):
	score += 1 
	$HUD.update_score(score)
	if size <= 1:
		return
	for offset in [-1, 1]:
		var dir = (pos - $Player.position).normalized().tangent() * offset
		var newpos = pos + dir * radius
		var newvel = dir * vel.length() * 1.1
		spawn_enemy(size - 1, newpos, newvel)

func _on_Player_shoot(cannonball, pos, dir):
	var b = cannonball.instance()
	b.start(pos, dir)
	add_child(b)
	
#func _input(InputEvent):
#	if Input.is_action_pressed('pause'):
#		if not playing:
#			return
#	get_tree().paused = not get_tree().paused
#	if get_tree().paused:
#		$HUD/MessageLabel.text = "Paused"
#		$HUD/MessageLabel.show()
#	else:
#		$HUD/MessageLabel.text = ""
#		$HUD/MessageLabel.hide()
