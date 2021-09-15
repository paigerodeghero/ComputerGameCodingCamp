library(ggplot2)
library(reshape2)
library(xtable)
library(data.table)

# read in the data
cygnus.utter <- read.csv("team_cygnus.csv")

unique(cygnus.utter[["talking"]])

# Team Cygnus #
# declare variables
g = as.integer(0)
g_t = as.integer(0)
g_nt = as.integer(0)
g_w = as.integer(0)
a = as.integer(0)
a_t = as.integer(0)
a_nt = as.integer(0)
a_nt = as.integer(0)
a_w = as.integer(0)
t = as.integer(0)
t_t = as.integer(0)
t_w = as.integer(0)

# create data frame
cydata.utter <- data.frame(day=numeric(), name=character(), utterances=numeric(), turns=numeric(), turnsnt=numeric(), wutterances=numeric(), wturns=numeric(), wturnsnt=numeric())

# parse through data and count utterances and turns
for (x in cygnus.utter$id){
  if (cygnus.utter[x,"talking"] == "George"){
    g = g + 1
    g_w = g_w + cygnus.utter[x,"words"]
    if(cygnus.utter[x+1,"talking"] != "George" || x == length(t(cygnus.utter[1]))){
      g_t = g_t + 1
      if(cygnus.utter[x+1,"talking"] != "TA" || x == length(t(cygnus.utter[1]))){
        g_nt = g_nt + 1
      }
    }
  }
  else if (cygnus.utter[x,"talking"] == "Alfredo"){
    a = a + 1
    a_w = a_w + cygnus.utter[x,"words"]
    if(cygnus.utter[x+1,"talking"] != "Alfredo" || x == length(t(cygnus.utter[1]))){
      a_t = a_t + 1
      if(cygnus.utter[x+1,"talking"] != "TA" || x == length(t(cygnus.utter[1]))){
        a_nt = a_nt + 1
      }
    }
  }
  else{
    t = t + 1
    t_w = t_w + cygnus.utter[x,"words"]
    if(cygnus.utter[x+1,"talking"] != "TA" || x == length(t(cygnus.utter[1]))){
      t_t = t_t + 1
    }
  }
  # add to data frame by each day
  if(cygnus.utter[x,"day"] != cygnus.utter[x+1,"day"] || x == length(t(cygnus.utter[1]))){
    cydata.utter[nrow(cydata.utter) + 1,] = c(cygnus.utter[x,"day"], "George", g, g_t, g_nt, round(g_w/g, digits = 0), round(g_w/g_t, digits = 0), round(g_w/g_nt, digits = 0))
    cydata.utter[nrow(cydata.utter) + 1,] = c(cygnus.utter[x,"day"], "Alfredo", a, a_t, a_nt, round(a_w/a, digits = 0), round(a_w/a_t, digits = 0), round(a_w/a_nt, digits = 0))
    cydata.utter[nrow(cydata.utter) + 1,] = c(cygnus.utter[x,"day"], "TA", t, t_t, t_t, round(t_w/t, digits = 0), round(t_w/t_t, digits = 0), round(t_w/t_t, digits = 0))
    g = 0
    g_t = 0
    g_nt = 0
    g_w = 0
    a = 0
    a_t = 0
    a_nt = 0
    a_w = 0
    t = 0
    t_t = 0
    t_w = 0
  }
}

# making sure data is numeric
cydata.utter$day <- as.numeric(as.character(cydata.utter$day))
cydata.utter$utterances <- as.numeric(as.character(cydata.utter$utterances))
cydata.utter$turns <- as.numeric((as.character(cydata.utter$turns)))
cydata.utter$turnsnt <- as.numeric((as.character(cydata.utter$turnsnt)))
cydata.utter$wutterances <- as.numeric(as.character(cydata.utter$wutterances))
cydata.utter$wturns <- as.numeric((as.character(cydata.utter$wturns)))
cydata.utter$wturnsnt <- as.numeric((as.character(cydata.utter$wturnsnt)))

# plotting utterances
c1 <- ggplot(data=cydata.utter, aes(x=day, y=utterances, fill=name)) +
  geom_bar(stat="identity", position=position_dodge()) +
  geom_text(aes(label=utterances), vjust=1.6, color="white",
            position = position_dodge(0.9), size=3.5)+
  scale_fill_brewer(palette="Paired")+
  labs(title = "Team Cygnus no. of Utterances")+
  theme_minimal()+
  theme(plot.title = element_text(hjust = 0.5))

c1

# plotting individual turns
c2 <- ggplot(data=cydata.utter, aes(x=day, y=turns, fill=name)) +
  geom_bar(stat="identity", position=position_dodge()) +
  geom_text(aes(label=turns), vjust=1.6, color="white",
            position = position_dodge(0.9), size=3.5)+
  scale_fill_brewer(palette="Paired")+
  labs(title = "Team Cygnus no. of Turns")+
  theme_minimal()+
  theme(plot.title = element_text(hjust = 0.5))

c2

# plotting team turns
c3 <- ggplot(data=cydata.utter[which(cydata.utter$name!="TA"),], aes(x=day, y=turnsnt, fill=name)) +
  geom_bar(stat="identity", position=position_dodge()) +
  geom_text(aes(label=turnsnt), vjust=1.6, color="white",
            position = position_dodge(0.9), size=3.5)+
  scale_fill_brewer(palette="Paired")+
  labs(title = "Team Cygnus no. of Turns (Team)")+
  theme_minimal()+
  theme(plot.title = element_text(hjust = 0.5))

c3

# plotting words utterances
c4 <- ggplot(data=cydata.utter, aes(x=day, y=wutterances, fill=name)) +
  geom_bar(stat="identity", position=position_dodge()) +
  geom_text(aes(label=wutterances), vjust=1.6, color="white",
            position = position_dodge(0.9), size=3.5)+
  scale_fill_brewer(palette="Paired")+
  labs(title = "Team Cygnus avg. Words per Utterances")+
  theme_minimal()+
  theme(plot.title = element_text(hjust = 0.5))

c4

# plotting words individual turns
c5 <- ggplot(data=cydata.utter, aes(x=day, y=wturns, fill=name)) +
  geom_bar(stat="identity", position=position_dodge()) +
  geom_text(aes(label=wturns), vjust=1.6, color="white",
            position = position_dodge(0.9), size=3.5)+
  scale_fill_brewer(palette="Paired")+
  labs(title = "Team Cygnus avg. Words per Turns")+
  theme_minimal()+
  theme(plot.title = element_text(hjust = 0.5))

c5

# plotting words team turns
c6 <- ggplot(data=cydata.utter[which(cydata.utter$name!="TA"),], aes(x=day, y=wturnsnt, fill=name)) +
  geom_bar(stat="identity", position=position_dodge()) +
  geom_text(aes(label=wturnsnt), vjust=1.6, color="white",
            position = position_dodge(0.9), size=3.5)+
  scale_fill_brewer(palette="Paired")+
  labs(title = "Team Cygnus avg. Words per Turns (Team)")+
  theme_minimal()+
  theme(plot.title = element_text(hjust = 0.5))

c6

# combined plots
df1 <- data.frame(cydata.utter[, c("day", "name", "turns")], "indv")
colnames(df1) <- c('day','name','turns', 'type')
df2 <- data.frame(cydata.utter[, c("day", "name", "turnsnt")], "team")
colnames(df2) <- c('day','name','turns', 'type')
df3 <- rbind(df1,df2)


# turns
c7 <- ggplot(data=df3[which(df3$name!="TA"),], aes(x=day, y=turns, group=name,fill=type)) +
  geom_bar(stat="identity", position=position_dodge(0.92)) +
  geom_text(aes(label=turns), vjust=-0.25, color="black",
            position = position_dodge(0.9), size=3.5)+
  facet_wrap(~name, strip.position = "left", scales = "free_x") +
  scale_fill_brewer(palette="Paired")+
  labs(title = "Team Cygnus no. of Turns per person")+
  theme_minimal()+
  theme(plot.title = element_text(hjust = 0.5))

c7