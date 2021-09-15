library(ggplot2)
library(reshape2)
library(xtable)
library(data.table)

# read in the data
orion.utter <- read.csv("team_orion.csv")

unique(orion.utter[["talking"]])

# Team Orion #
# declare variables
an = as.integer(0)
an_t = as.integer(0)
an_nt = as.integer(0)
an_w = as.integer(0)
ai = as.integer(0)
ai_t = as.integer(0)
ai_nt = as.integer(0)
ai_w = as.integer(0)
t = as.integer(0)
t_t = as.integer(0)
t_w = as.integer(0)

# create data frame
ordata.utter <- data.frame(day=numeric(), name=character(), utterances=numeric(), turns=numeric(), turnsnt=numeric(), wutterances=numeric(), wturns=numeric(), wturnsnt=numeric())

# parse through data and count utterances and turns
for (x in orion.utter$id){
  if (orion.utter[x,"talking"] == "Arthur"){
    an = an + 1
    an_w = an_w + orion.utter[x,"words"]
    if(orion.utter[x+1,"talking"] != "Arthur" || x == length(t(orion.utter[1]))){
      an_t = an_t + 1
      if(orion.utter[x+1,"talking"] != "TA" || x == length(t(orion.utter[1]))){
        an_nt = an_nt + 1
      }
    }
  }
  else if (orion.utter[x,"talking"] == "Adam"){
    ai = ai + 1
    ai_w = ai_w + orion.utter[x,"words"]
    if(orion.utter[x+1,"talking"] != "Adam" || x == length(t(orion.utter[1]))){
      ai_t = ai_t + 1
      if(orion.utter[x+1,"talking"] != "TA" || x == length(t(orion.utter[1]))){
        ai_nt = ai_nt + 1
      }
    }
  }
  else{
    t = t + 1
    t_w = t_w + orion.utter[x,"words"]
    if(orion.utter[x+1,"talking"] != "TA" || x == length(t(orion.utter[1]))){
      t_t = t_t + 1
    }
  }
  # add to data frame by each day
  if(orion.utter[x,"day"] != orion.utter[x+1,"day"] || x == length(t(orion.utter[1]))){
    ordata.utter[nrow(ordata.utter) + 1,] = c(orion.utter[x,"day"], "Arthur", an, an_t, an_nt, round(an_w/an, digits = 0), round(an_w/an_t, digits = 0), round(an_w/an_nt, digits = 0))
    ordata.utter[nrow(ordata.utter) + 1,] = c(orion.utter[x,"day"], "Adam", ai, ai_t, ai_nt, round(ai_w/ai, digits = 0), round(ai_w/ai_t, digits = 0), round(ai_w/ai_nt, digits = 0))
    ordata.utter[nrow(ordata.utter) + 1,] = c(orion.utter[x,"day"], "TA", t, t_t, t_t, round(t_w/t, digits = 0), round(t_w/t_t, digits = 0), round(t_w/t_t, digits = 0))
    an = 0
    an_t = 0
    an_nt = 0
    an_w = 0
    ai = 0
    ai_t = 0
    ai_nt = 0
    ai_w = 0
    t = 0
    t_t = 0
    t_w = 0
  }
}

# making sure data is numeric
ordata.utter$day <- as.numeric(as.character(ordata.utter$day))
ordata.utter$utterances <- as.numeric(as.character(ordata.utter$utterances))
ordata.utter$turns <- as.numeric((as.character(ordata.utter$turns)))
ordata.utter$turnsnt <- as.numeric((as.character(ordata.utter$turnsnt)))
ordata.utter$wutterances <- as.numeric(as.character(ordata.utter$wutterances))
ordata.utter$wturns <- as.numeric((as.character(ordata.utter$wturns)))
ordata.utter$wturnsnt <- as.numeric((as.character(ordata.utter$wturnsnt)))

# plotting utterances
o1 <- ggplot(data=ordata.utter, aes(x=day, y=utterances, fill=name)) +
  geom_bar(stat="identity", position=position_dodge()) +
  geom_text(aes(label=utterances), vjust=1.6, color="white",
            position = position_dodge(0.9), size=3.5)+
  scale_fill_brewer(palette="Paired")+
  labs(title = "Team Orion no. of Utterances")+
  theme_minimal()+
  theme(plot.title = element_text(hjust = 0.5))

o1

# plotting individual turns
o2 <- ggplot(data=ordata.utter, aes(x=day, y=turns, fill=name)) +
  geom_bar(stat="identity", position=position_dodge()) +
  geom_text(aes(label=turns), vjust=1.6, color="white",
            position = position_dodge(0.9), size=3.5)+
  scale_fill_brewer(palette="Paired")+
  labs(title = "Team Orion no. of Turns")+
  theme_minimal()+
  theme(plot.title = element_text(hjust = 0.5))

o2

# plotting team turns
o3 <- ggplot(data=ordata.utter[which(ordata.utter$name!="TA"),], aes(x=day, y=turnsnt, fill=name)) +
  geom_bar(stat="identity", position=position_dodge()) +
  geom_text(aes(label=turnsnt), vjust=1.6, color="white",
            position = position_dodge(0.9), size=3.5)+
  scale_fill_brewer(palette="Paired")+
  labs(title = "Team Orion no. of Turns (Team)")+
  theme_minimal()+
  theme(plot.title = element_text(hjust = 0.5))

o3

# plotting word utterances
o4 <- ggplot(data=ordata.utter, aes(x=day, y=wutterances, fill=name)) +
  geom_bar(stat="identity", position=position_dodge()) +
  geom_text(aes(label=wutterances), vjust=1.6, color="white",
            position = position_dodge(0.9), size=3.5)+
  scale_fill_brewer(palette="Paired")+
  labs(title = "Team Orion avg. Words per Utterances")+
  theme_minimal()+
  theme(plot.title = element_text(hjust = 0.5))

o4

# plotting word individual turns
o5 <- ggplot(data=ordata.utter, aes(x=day, y=wturns, fill=name)) +
  geom_bar(stat="identity", position=position_dodge()) +
  geom_text(aes(label=wturns), vjust=1.6, color="white",
            position = position_dodge(0.9), size=3.5)+
  scale_fill_brewer(palette="Paired")+
  labs(title = "Team Orion avg. Words per Turns")+
  theme_minimal()+
  theme(plot.title = element_text(hjust = 0.5))

o5

# plotting word team turns
o6 <- ggplot(data=ordata.utter[which(ordata.utter$name!="TA"),], aes(x=day, y=wturnsnt, fill=name)) +
  geom_bar(stat="identity", position=position_dodge()) +
  geom_text(aes(label=wturnsnt), vjust=1.6, color="white",
            position = position_dodge(0.9), size=3.5)+
  scale_fill_brewer(palette="Paired")+
  labs(title = "Team Orion avg. Words per Turns (Team)")+
  theme_minimal()+
  theme(plot.title = element_text(hjust = 0.5))

o6

# combined plots
df1 <- data.frame(ordata.utter[, c("day", "name", "turns")], "indv")
colnames(df1) <- c('day','name','turns', 'type')
df2 <- data.frame(ordata.utter[, c("day", "name", "turnsnt")], "team")
colnames(df2) <- c('day','name','turns', 'type')
df3 <- rbind(df1,df2)


# turns
o7 <- ggplot(data=df3[which(df3$name!="TA"),], aes(x=day, y=turns, group=name,fill=type)) +
  geom_bar(stat="identity", position=position_dodge(0.92)) +
  geom_text(aes(label=turns), vjust=-0.25, color="black",
            position = position_dodge(0.9), size=3.5)+
  facet_wrap(~name, strip.position = "right", scales = "free_x") +
  scale_fill_brewer(palette="Paired")+
  labs(title = "Team Orion no. of Turns per person")+
  theme_minimal()+
  theme(plot.title = element_text(hjust = 0.5))

o7