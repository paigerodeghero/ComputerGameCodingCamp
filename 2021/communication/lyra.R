library(ggplot2)
library(reshape2)
library(xtable)
library(data.table)

# read in the data
lyra.utter <- read.csv("team_lyra.csv")

unique(lyra.utter[["talking"]])

# Team Lyra #
# declare variables
j = as.integer(0)
j_t = as.integer(0)
j_nt = as.integer(0)
j_w = as.integer(0)
s = as.integer(0)
s_t = as.integer(0)
s_nt = as.integer(0)
s_w = as.integer(0)
l = as.integer(0)
l_t = as.integer(0)
l_nt = as.integer(0)
l_w = as.integer(0)
t = as.integer(0)
t_t = as.integer(0)
t_w = as.integer(0)

# create data frame
lydata.utter <- data.frame(day=numeric(), name=character(), utterances=numeric(), turns=numeric(), turnsnt=numeric(), wutterances=numeric(), wturns=numeric(), wturnsnt=numeric())

# parse through data and count utterances and turns
for (x in lyra.utter$id){
  if (lyra.utter[x,"talking"] == "Justin"){
    j = j + 1
    j_w = j_w + lyra.utter[x,"words"]
    if(lyra.utter[x+1,"talking"] != "Justin" || x == length(t(lyra.utter[1]))){
      j_t = j_t + 1
      if(lyra.utter[x+1,"talking"] != "TA" || x == length(t(lyra.utter[1]))){
        j_nt = j_nt + 1
      }
    }
  }
  else if (lyra.utter[x,"talking"] == "Shen"){
    s = s + 1
    s_w = s_w + lyra.utter[x,"words"]
    if(lyra.utter[x+1,"talking"] != "Shen" || x == length(t(lyra.utter[1]))){
      s_t = s_t + 1
      if(lyra.utter[x+1,"talking"] != "TA" || x == length(t(lyra.utter[1]))){
        s_nt = s_nt + 1
      }
    }
  }
  else if (lyra.utter[x,"talking"] == "Logan"){
    l = l + 1
    l_w = l_w + lyra.utter[x,"words"]
    if(lyra.utter[x+1,"talking"] != "Logan" || x == length(t(lyra.utter[1]))){
      l_t = l_t + 1
      if(lyra.utter[x+1,"talking"] != "TA" || x == length(t(lyra.utter[1]))){
        l_nt = l_nt + 1
      }
    }
  }
  else{
    t = t + 1
    t_w = t_w + lyra.utter[x,"words"]
    if(lyra.utter[x+1,"talking"] != "TA" || x == length(t(lyra.utter[1]))){
      t_t = t_t + 1
    }
  }
  
  # add to data frame by each day
  if(lyra.utter[x,"day"] != lyra.utter[x+1,"day"] || x == length(t(lyra.utter[1]))){
    lydata.utter[nrow(lydata.utter) + 1,] = c(lyra.utter[x,"day"], "Justin", j, j_t, j_nt, round(j_w/j, digits = 0), round(j_w/j_t, digits = 0), round(j_w/j_nt, digits = 0))
    lydata.utter[nrow(lydata.utter) + 1,] = c(lyra.utter[x,"day"], "Shen", s, s_t, s_nt, round(s_w/s, digits = 0), round(s_w/s_t, digits = 0), round(s_w/s_nt, digits = 0))
    lydata.utter[nrow(lydata.utter) + 1,] = c(lyra.utter[x,"day"], "Logan", l, l_t, l_nt, round(l_w/l, digits = 0), round(l_w/l_t, digits = 0), round(l_w/l_nt, digits = 0))
    lydata.utter[nrow(lydata.utter) + 1,] = c(lyra.utter[x,"day"], "TA", t, t_t, t_t, round(t_w/t, digits = 0), round(t_w/t_t, digits = 0), round(t_w/t_t, digits = 0))
    j = 0
    j_t = 0
    j_nt = 0
    j_w = 0
    s = 0
    s_t = 0
    s_nt = 0
    s_w = 0
    l = 0
    l_t = 0
    l_nt = 0
    l_w = 0
    t = 0
    t_t = 0
    t_w = 0
  }
}

# making sure data is numeric
lydata.utter$day <- as.numeric(as.character(lydata.utter$day))
lydata.utter$utterances <- as.numeric(as.character(lydata.utter$utterances))
lydata.utter$turns <- as.numeric((as.character(lydata.utter$turns)))
lydata.utter$turnsnt <- as.numeric((as.character(lydata.utter$turnsnt)))
lydata.utter$wutterances <- as.numeric(as.character(lydata.utter$wutterances))
lydata.utter$wturns <- as.numeric((as.character(lydata.utter$wturns)))
lydata.utter$wturnsnt <- as.numeric((as.character(lydata.utter$wturnsnt)))


# plotting utterances
l1 <- ggplot(data=lydata.utter, aes(x=day, y=utterances, fill=name)) +
  geom_bar(stat="identity", position=position_dodge()) +
  geom_text(aes(label=utterances), vjust=1.6, color="white",
            position = position_dodge(0.9), size=3.5)+
  scale_fill_brewer(palette="Paired")+
  labs(title = "Team Lyra no. of Utterances")+
  theme_minimal()+
  theme(plot.title = element_text(hjust = 0.5))

l1

# plotting individual turns
l2 <- ggplot(data=lydata.utter, aes(x=day, y=turns, fill=name)) +
  geom_bar(stat="identity", position=position_dodge()) +
  geom_text(aes(label=turns), vjust=1.6, color="white",
            position = position_dodge(0.9), size=3.5)+
  scale_fill_brewer(palette="Paired")+
  labs(title = "Team Lyra no. of Turns")+
  theme_minimal()+
  theme(plot.title = element_text(hjust = 0.5))

l2

# plotting team turns
l3 <- ggplot(data=lydata.utter[which(lydata.utter$name!="TA"),], aes(x=day, y=turnsnt, fill=name)) +
  geom_bar(stat="identity", position=position_dodge()) +
  geom_text(aes(label=turnsnt), vjust=1.6, color="white",
            position = position_dodge(0.9), size=3.5)+
  scale_fill_brewer(palette="Paired")+
  labs(title = "Team Lyra no. of Turns (Team)")+
  theme_minimal()+
  theme(plot.title = element_text(hjust = 0.5))

l3

# plotting word per utterances
l4 <- ggplot(data=lydata.utter, aes(x=day, y=wutterances, fill=name)) +
  geom_bar(stat="identity", position=position_dodge()) +
  geom_text(aes(label=wutterances), vjust=1.6, color="white",
            position = position_dodge(0.9), size=3.5)+
  scale_fill_brewer(palette="Paired")+
  labs(title = "Team Lyra avg. Words per Utterances")+
  theme_minimal()+
  theme(plot.title = element_text(hjust = 0.5))

l4

# plotting words per individual turns
l5 <- ggplot(data=lydata.utter, aes(x=day, y=wturns, fill=name)) +
  geom_bar(stat="identity", position=position_dodge()) +
  geom_text(aes(label=wturns), vjust=1.6, color="white",
            position = position_dodge(0.9), size=3.5)+
  scale_fill_brewer(palette="Paired")+
  labs(title = "Team v avg. Words per Turns")+
  theme_minimal()+
  theme(plot.title = element_text(hjust = 0.5))

l5

# plotting words per team turns
l6 <- ggplot(data=lydata.utter[which(lydata.utter$name!="TA"),], aes(x=day, y=wturnsnt, fill=name)) +
  geom_bar(stat="identity", position=position_dodge()) +
  geom_text(aes(label=wturnsnt), vjust=1.6, color="white",
            position = position_dodge(0.9), size=3.5)+
  scale_fill_brewer(palette="Paired")+
  labs(title = "Team Lyra avg. Words per Turns (Team)")+
  theme_minimal()+
  theme(plot.title = element_text(hjust = 0.5))

l6

# combined plots
df1 <- data.frame(lydata.utter[, c("day", "name", "turns")], "indv")
colnames(df1) <- c('day','name','turns', 'type')
df2 <- data.frame(lydata.utter[, c("day", "name", "turnsnt")], "team")
colnames(df2) <- c('day','name','turns', 'type')
df3 <- rbind(df1,df2)


# turns
l7 <- ggplot(data=df3[which(df3$name!="TA"),], aes(x=day, y=turns, group=name,fill=type)) +
  geom_bar(stat="identity", position=position_dodge(0.92)) +
  geom_text(aes(label=turns), vjust=-0.25, color="black",
            position = position_dodge(0.9), size=3.5)+
  facet_wrap(~name, strip.position = "top", scales = "free_x") +
  scale_fill_brewer(palette="Paired")+
  labs(title = "Team Lyra no. of Turns per person")+
  theme_minimal()+
  theme(plot.title = element_text(hjust = 0.5))

l7
