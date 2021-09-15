library(ggplot2)
library(reshape2)
library(xtable)
library(data.table)

# read in the data
taurus.utter <- read.csv("team_taurus.csv")

unique(taurus.utter[["talking"]])

# Team Taurus #
# declare variables
m = as.integer(0)
m_t = as.integer(0)
m_nt = as.integer(0)
m_w = as.integer(0)
e = as.integer(0)
e_t = as.integer(0)
e_nt = as.integer(0)
e_w = as.integer(0)
t = as.integer(0)
t_t = as.integer(0)
t_w = as.integer(0)

# create data frame
tadata.utter <- data.frame(day=numeric(), name=character(), utterances=numeric(), turns=numeric(), turnsnt=numeric(), wutterances=numeric(), wturns=numeric(), wturnsnt=numeric())

# parse through data and count utterances and turns
for (x in taurus.utter$id){
  if (taurus.utter[x,"talking"] == "Michael"){
    m = m + 1
    m_w = m_w + taurus.utter[x,"words"]
    if(taurus.utter[x+1,"talking"] != "Michael" || x == length(t(taurus.utter[1]))){
      m_t = m_t + 1
      if(taurus.utter[x+1,"talking"] != "TA" || x == length(t(taurus.utter[1]))){
        m_nt = m_nt + 1
      }
    }
  }
  else if (taurus.utter[x,"talking"] == "Edward"){
    e = e + 1
    e_w = e_w + taurus.utter[x,"words"]
    if(taurus.utter[x+1,"talking"] != "Edward" || x == length(t(taurus.utter[1]))){
      e_t = e_t + 1
      if(taurus.utter[x+1,"talking"] != "TA" || x == length(t(taurus.utter[1]))){
        e_nt = e_nt + 1
      }
    }
  }
  else{
    t = t + 1
    t_w = t_w + taurus.utter[x,"words"]
    if(taurus.utter[x+1,"talking"] != "TA" || x == length(t(taurus.utter[1]))){
      t_t = t_t + 1
    }
  }
  # add to data frame by each day
  if(taurus.utter[x,"day"] != taurus.utter[x+1,"day"] || x == length(t(taurus.utter[1]))){
    tadata.utter[nrow(tadata.utter) + 1,] = c(taurus.utter[x,"day"], "Michael", m, m_t, m_nt, round(m_w/m, digits = 0), round(m_w/m_t, digits = 0), round(m_w/m_nt, digits = 0))
    tadata.utter[nrow(tadata.utter) + 1,] = c(taurus.utter[x,"day"], "Edward", e, e_t, e_nt, round(e_w/e, digits = 0), round(e_w/e_t, digits = 0), round(e_w/e_nt, digits = 0))
    tadata.utter[nrow(tadata.utter) + 1,] = c(taurus.utter[x,"day"], "TA", t, t_t, t_t, round(t_w/t, digits = 0), round(t_w/t_t, digits = 0), round(t_w/t_t, digits = 0))
    m = 0
    m_t = 0
    m_nt = 0
    m_w = 0
    e = 0
    e_t = 0
    e_nt = 0
    e_w = 0
    t = 0
    t_t = 0
    t_w = 0
  }
}

# making sure data is numeric
tadata.utter$day <- as.numeric(as.character(tadata.utter$day))
tadata.utter$utterances <- as.numeric(as.character(tadata.utter$utterances))
tadata.utter$turns <- as.numeric((as.character(tadata.utter$turns)))
tadata.utter$turnsnt <- as.numeric((as.character(tadata.utter$turnsnt)))
tadata.utter$wutterances <- as.numeric(as.character(tadata.utter$wutterances))
tadata.utter$wturns <- as.numeric((as.character(tadata.utter$wturns)))
tadata.utter$wturnsnt <- as.numeric((as.character(tadata.utter$wturnsnt)))

# plotting utterances
t1 <- ggplot(data=tadata.utter, aes(x=day, y=utterances, fill=name)) +
  geom_bar(stat="identity", position=position_dodge()) +
  geom_text(aes(label=utterances), vjust=1.6, color="white",
            position = position_dodge(0.9), size=3.5)+
  scale_fill_brewer(palette="Paired")+
  labs(title = "Team Taurus no. of Utterances")+
  theme_minimal()+
  theme(plot.title = element_text(hjust = 0.5))

t1

# plotting individual turns
t2 <- ggplot(data=tadata.utter, aes(x=day, y=turns, fill=name)) +
  geom_bar(stat="identity", position=position_dodge()) +
  geom_text(aes(label=turns), vjust=1.6, color="white",
            position = position_dodge(0.9), size=3.5)+
  scale_fill_brewer(palette="Paired")+
  labs(title = "Team Taurus no. of Turns")+
  theme_minimal()+
  theme(plot.title = element_text(hjust = 0.5))

t2

# plotting team turns
t3 <- ggplot(data=tadata.utter[which(tadata.utter$name!="TA"),], aes(x=day, y=turnsnt, fill=name)) +
  geom_bar(stat="identity", position=position_dodge()) +
  geom_text(aes(label=turnsnt), vjust=1.6, color="white",
            position = position_dodge(0.9), size=3.5)+
  scale_fill_brewer(palette="Paired")+
  labs(title = "Team Taurus no. of Turns (Team)")+
  theme_minimal()+
  theme(plot.title = element_text(hjust = 0.5))

t3

# plotting words per utterances
t4 <- ggplot(data=tadata.utter, aes(x=day, y=wutterances, fill=name)) +
  geom_bar(stat="identity", position=position_dodge()) +
  geom_text(aes(label=wutterances), vjust=1.6, color="white",
            position = position_dodge(0.9), size=3.5)+
  scale_fill_brewer(palette="Paired")+
  labs(title = "Team Taurus avg. Words per Utterances")+
  theme_minimal()+
  theme(plot.title = element_text(hjust = 0.5))

t4

# plotting words per individual turns
t5 <- ggplot(data=tadata.utter, aes(x=day, y=wturns, fill=name)) +
  geom_bar(stat="identity", position=position_dodge()) +
  geom_text(aes(label=wturns), vjust=1.6, color="white",
            position = position_dodge(0.9), size=3.5)+
  scale_fill_brewer(palette="Paired")+
  labs(title = "Team Taurus avg. Words per Turns")+
  theme_minimal()+
  theme(plot.title = element_text(hjust = 0.5))

t5

# plotting words per team turns
t6 <- ggplot(data=tadata.utter[which(tadata.utter$name!="TA"),], aes(x=day, y=wturnsnt, fill=name)) +
  geom_bar(stat="identity", position=position_dodge()) +
  geom_text(aes(label=wturnsnt), vjust=1.6, color="white",
            position = position_dodge(0.9), size=3.5)+
  scale_fill_brewer(palette="Paired")+
  labs(title = "Team Taurus avg. Words per Turns (Team)")+
  theme_minimal()+
  theme(plot.title = element_text(hjust = 0.5))

t6

# combined plots
df1 <- data.frame(tadata.utter[, c("day", "name", "turns")], "indv")
colnames(df1) <- c('day','name','turns', 'type')
df2 <- data.frame(tadata.utter[, c("day", "name", "turnsnt")], "team")
colnames(df2) <- c('day','name','turns', 'type')
df3 <- rbind(df1,df2)


# turns
t7 <- ggplot(data=df3[which(df3$name!="TA"),], aes(x=day, y=turns, group=name,fill=type)) +
  geom_bar(stat="identity", position=position_dodge(0.92)) +
  geom_text(aes(label=turns), vjust=-0.25, color="black",
            position = position_dodge(0.9), size=3.5)+
  facet_wrap(~name, strip.position = "bottom", scales = "free_x") +
  scale_fill_brewer(palette="Paired")+
  labs(title = "Team Taurus no. of Turns per person")+
  theme_minimal()+
  theme(plot.title = element_text(hjust = 0.5))

t7