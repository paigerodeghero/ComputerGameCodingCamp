library(ggplot2)
library(reshape2)
library(xtable)
library(data.table)

# read in the data
canis_major.utter <- read.csv("team_canis_major.csv")

unique(canis_major.utter[["talking"]])


# Team Canis Major #
# declare variables
f = as.integer(0)
f_t = as.integer(0)
f_nt = as.integer(0)
f_w = as.integer(0)
m = as.integer(0)
m_t = as.integer(0)
m_nt = as.integer(0)
m_w = as.integer(0)
ab = as.integer(0)
ab_t = as.integer(0)
ab_nt = as.integer(0)
ab_w = as.integer(0)
t = as.integer(0)
t_t = as.integer(0)
t_w = as.integer(0)

# create data frame
cmdata.utter <- data.frame(day=numeric(), name=character(), utterances=numeric(), turns=numeric(), turnsnt=numeric(), wutterances=numeric(), wturns=numeric(), wturnsnt=numeric())

# parse through data and count utterances and turns
for (x in canis_major.utter$id){
  if (canis_major.utter[x,"talking"] == "Freddie"){
    f = f + 1
    f_w = f_w + canis_major.utter[x,"words"]
    if(canis_major.utter[x+1,"talking"] != "Freddie" || x == length(t(canis_major.utter[1]))){
      f_t = f_t + 1
      if(canis_major.utter[x+1,"talking"] != "TA" || x == length(t(canis_major.utter[1]))){
        f_nt = f_nt + 1
      }
    }
  }
  else if (canis_major.utter[x,"talking"] == "Mason"){
    m = m + 1
    m_w = m_w + canis_major.utter[x,"words"]
    if(canis_major.utter[x+1,"talking"] != "Mason" || x == length(t(canis_major.utter[1]))){
      m_t = m_t + 1
      if(canis_major.utter[x+1,"talking"] != "TA" || x == length(t(canis_major.utter[1]))){
        m_nt = m_nt + 1
      }
    }
  }
  else if (canis_major.utter[x,"talking"] == "Adam"){
    ab = ab + 1
    ab_w = ab_w + canis_major.utter[x,"words"]
    if(canis_major.utter[x+1,"talking"] != "Adam" || x == length(t(canis_major.utter[1]))){
      ab_t = ab_t + 1
      if(canis_major.utter[x+1,"talking"] != "TA" || x == length(t(canis_major.utter[1]))){
        ab_nt = ab_nt + 1
      }
    }
  }
  else{
    t = t + 1
    t_w = t_w + canis_major.utter[x,"words"]
    if(canis_major.utter[x+1,"talking"] != "TA" || x == length(t(canis_major.utter[1]))){
      t_t = t_t + 1
    }
  }
  # add to data frame by each day
  if(canis_major.utter[x,"day"] != canis_major.utter[x+1,"day"] || x == length(t(canis_major.utter[1]))){
    cmdata.utter[nrow(cmdata.utter) + 1,] = c(canis_major.utter[x,"day"], "Freddie", f, f_t, f_nt, round(f_w/f, digits = 0), round(f_w/f_t, digits = 0), round(f_w/f_nt, digits = 0))
    cmdata.utter[nrow(cmdata.utter) + 1,] = c(canis_major.utter[x,"day"], "Mason", m, m_t, m_nt, round(m_w/m, digits = 0), round(m_w/m_t, digits = 0), round(m_w/m_nt, digits = 0))
    cmdata.utter[nrow(cmdata.utter) + 1,] = c(canis_major.utter[x,"day"], "Adam", ab, ab_t, ab_nt, round(ab_w/ab, digits = 0), round(ab_w/ab_t, digits = 0), round(ab_w/ab_nt, digits = 0))
    cmdata.utter[nrow(cmdata.utter) + 1,] = c(canis_major.utter[x,"day"], "TA", t, t_t, t_t, round(t_w/t, digits = 0), round(t_w/t_t, digits = 0), round(t_w/t_t, digits = 0))
    f = 0
    f_t = 0
    f_nt = 0
    f_w = 0
    m = 0
    m_t = 0
    m_nt = 0
    m_w = 0
    ab = 0
    ab_t = 0
    ab_nt = 0
    ab_w = 0
    t = 0
    t_t = 0
    t_w = 0
  }
}

# making sure data is numeric
cmdata.utter$day <- as.numeric(as.character(cmdata.utter$day))
cmdata.utter$utterances <- as.numeric(as.character(cmdata.utter$utterances))
cmdata.utter$turns <- as.numeric((as.character(cmdata.utter$turns)))
cmdata.utter$turnsnt <- as.numeric((as.character(cmdata.utter$turnsnt)))
cmdata.utter$wutterances <- as.numeric(as.character(cmdata.utter$wutterances))
cmdata.utter$wturns <- as.numeric((as.character(cmdata.utter$wturns)))
cmdata.utter$wturnsnt <- as.numeric((as.character(cmdata.utter$wturnsnt)))

# plotting utterances
cm1 <- ggplot(data=cmdata.utter, aes(x=day, y=utterances, fill=name)) +
  geom_bar(stat="identity", position=position_dodge()) +
  geom_text(aes(label=utterances), vjust=1.6, color="white",
            position = position_dodge(0.9), size=3.5)+
  scale_fill_brewer(palette="Paired")+
  labs(title = "Team Canis Major no. of Utterances")+
  theme_minimal()+
  theme(plot.title = element_text(hjust = 0.5))

cm1

# plotting individual turns
cm2 <- ggplot(data=cmdata.utter, aes(x=day, y=turns, fill=name)) +
  geom_bar(stat="identity", position=position_dodge()) +
  geom_text(aes(label=turns), vjust=1.6, color="white",
            position = position_dodge(0.9), size=3.5)+
  scale_fill_brewer(palette="Paired")+
  labs(title = "Team Canis Major no. of Turns")+
  theme_minimal()+
  theme(plot.title = element_text(hjust = 0.5))

cm2

# plotting team turns
cm3 <- ggplot(data=cmdata.utter[which(cmdata.utter$name!="TA"),], aes(x=day, y=turnsnt, fill=name)) +
  geom_bar(stat="identity", position=position_dodge()) +
  geom_text(aes(label=turnsnt), vjust=1.6, color="white",
            position = position_dodge(0.9), size=3.5)+
  scale_fill_brewer(palette="Paired")+
  labs(title = "Team Canis Major no. of Turns (Team)")+
  theme_minimal()+
  theme(plot.title = element_text(hjust = 0.5))

cm3

# plotting words utterances
cm4 <- ggplot(data=cmdata.utter, aes(x=day, y=wutterances, fill=name)) +
  geom_bar(stat="identity", position=position_dodge()) +
  geom_text(aes(label=wutterances), vjust=1.6, color="white",
            position = position_dodge(0.9), size=3.5)+
  scale_fill_brewer(palette="Paired")+
  labs(title = "Team Canis Major avg. Words per Utterances")+
  theme_minimal()+
  theme(plot.title = element_text(hjust = 0.5))

cm4

# plotting words individual turns
cm5 <- ggplot(data=cmdata.utter, aes(x=day, y=wturns, fill=name)) +
  geom_bar(stat="identity", position=position_dodge()) +
  geom_text(aes(label=wturns), vjust=1.6, color="white",
            position = position_dodge(0.9), size=3.5)+
  scale_fill_brewer(palette="Paired")+
  labs(title = "Team Canis Major avg. Words per Turns")+
  theme_minimal()+
  theme(plot.title = element_text(hjust = 0.5))

cm5

# plotting words team turns
cm6 <- ggplot(data=cmdata.utter[which(cmdata.utter$name!="TA"),], aes(x=day, y=wturnsnt, fill=name)) +
  geom_bar(stat="identity", position=position_dodge()) +
  geom_text(aes(label=wturnsnt), vjust=1.6, color="white",
            position = position_dodge(0.9), size=3.5)+
  scale_fill_brewer(palette="Paired")+
  labs(title = "Team Canis Major avg. Words per Turns (Team)")+
  theme_minimal()+
  theme(plot.title = element_text(hjust = 0.5))

cm6

# combined plots
df1 <- data.frame(cmdata.utter[, c("day", "name", "turns")], "indv")
colnames(df1) <- c('day','name','turns', 'type')
df2 <- data.frame(cmdata.utter[, c("day", "name", "turnsnt")], "team")
colnames(df2) <- c('day','name','turns', 'type')
df3 <- rbind(df1,df2)


# turns
cm7 <- ggplot(data=df3[which(df3$name!="TA"),], aes(x=day, y=turns, group=name,fill=type)) +
  geom_bar(stat="identity", position=position_dodge(0.92)) +
  geom_text(aes(label=turns), vjust=-0.25, color="black",
  position = position_dodge(0.9), size=3.5)+
  facet_wrap(~name, strip.position = "center", scales = "free_x") +
  scale_fill_brewer(palette="Paired")+
  labs(title = "Team Canis Major no. of Turns per person (grouped by days)")+
  theme_minimal()+
  theme(plot.title = element_text(hjust = 0.5))

cm7