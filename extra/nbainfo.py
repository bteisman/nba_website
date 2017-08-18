from nba_py import player
from nba_py import team
import time
import salaries

'''
	Prints sql statements to insert into tables. Can't get the sql connector for python to work
'''

salary = salaries.salary()

sal = salary.get_salaries()

colors = salary.get_colors()

new_teams = salary.get_teams()

players = player.PlayerList().info()

teams = team.TeamList().info()

team_id = {}

for i in teams:
	time.sleep(1)
	s1 = team.TeamSummary(i['TEAM_ID']).info()
	if len(s1) > 0:
		s = s1[0]
		t = team.TeamSummary(i['TEAM_ID']).season_ranks()[0]
		name = str(s['TEAM_CITY']) + " " + str(s['TEAM_NAME'])
		insert = "INSERT INTO Team(team_id,team,conference,division,wins,losses,confrank,pts,asts,reb,opppts,ptsrank,astsrank,rebrank,oppptsrank,color,secondcolor) VALUES ("
		insert += str(i['TEAM_ID']) + ","
		team_id[name] = str(i['TEAM_ID'])
		insert += "\"" + name + "\","
		insert += "\"" + str(s['TEAM_CONFERENCE']) + "\","
		insert += "\"" + str(s['TEAM_DIVISION']) + "\","
		insert += str(s['W']) + ","
		insert += str(s['L']) + ","
		insert += str(s['CONF_RANK']) + ","
		insert += str(t['PTS_PG']) + ","
		insert += str(t['AST_PG']) + ","
		insert += str(t['REB_PG']) + ","
		insert += str(t['OPP_PTS_PG']) + ","
		insert += str(t['PTS_RANK']) + ","
		insert += str(t['AST_RANK']) + ","
		insert += str(t['REB_RANK']) + ","
		insert += str(t['OPP_PTS_RANK']) + ","
		insert += "\"" + colors[name][0] + "\","
		insert += "\"" + colors[name][1] + "\");"
		print insert

for i in players:
	time.sleep(1)
	t = player.PlayerCareer(i['PERSON_ID'])
	regular_seasons = t.regular_season_totals()
	rank_seasons = t.regular_season_rankings()
	last_season = regular_seasons[len(regular_seasons)-1]
	last_season_rank = rank_seasons[len(rank_seasons)-1]

	#Get new teams which aren't on nba.com
	teamname = str(i['TEAM_CITY']) + " " + str(i['TEAM_NAME'])
	teamid = str(last_season['TEAM_ID'])
	name = str(i['DISPLAY_FIRST_LAST'])

	if name in new_teams:
		if new_teams[name] != teamname:
			teamname = new_teams[name]
			teamid = team_id[teamname]


	insert = "INSERT INTO Player(player_id,name,team,team_id,age,minutes,points,assists,rebounds,blocks,turnovers,steals,ft,fg,threept,gp,gs,fouls,dreb,oreb,threeptrank,rebrank,ptsrank,effrank,stlrank,orebrank,drebrank,threepctrank,astrank,blkrank,tovrank,ftrank,fgrank,salary) VALUES ("
	insert += str(i['PERSON_ID']) + ","
	insert += "\"" + name + "\","
	insert += "\"" + teamname + "\","
	insert += teamid + ","
	insert += str(last_season['PLAYER_AGE']) + ","
	insert += str(last_season['MIN']) + ","
	insert += str(last_season['PTS']) + ","
	insert += str(last_season['AST']) + ","
	insert += str(last_season['REB']) + ","
	insert += str(last_season['BLK']) + ","
	insert += str(last_season['TOV']) + ","
	insert += str(last_season['STL']) + ","
	insert += str(last_season['FT_PCT']) + ","
	insert += str(last_season['FG_PCT']) + ","
	insert += str(last_season['FG3_PCT']) + ","
	insert += str(last_season['GP']) + ","
	insert += str(last_season['GS']) + ","
	insert += str(last_season['PF']) + ","
	insert += str(last_season['DREB']) + ","
	insert += str(last_season['OREB']) + ","
	if str(last_season_rank['RANK_PG_FG3M']) != "None":
		insert += str(last_season_rank['RANK_PG_FG3M']) + ","
	else:
		insert += "0,"
	if str(last_season_rank['RANK_PG_REB']) != "None":
		insert += str(last_season_rank['RANK_PG_REB']) + ","
	else:
		insert += "0,"
	if str(last_season_rank['RANK_PG_PTS']) != "None":
		insert += str(last_season_rank['RANK_PG_PTS']) + ","
	else:
		insert += "0,"
	if str(last_season_rank['RANK_PG_EFF']) != "None":
		insert += str(last_season_rank['RANK_PG_EFF']) + ","
	else:
		insert += "0,"
	if str(last_season_rank['RANK_PG_STL']) != "None":
		insert += str(last_season_rank['RANK_PG_STL']) + ","
	else:
		insert += "0,"
	if str(last_season_rank['RANK_PG_OREB']) != "None":
		insert += str(last_season_rank['RANK_PG_OREB']) + ","
	else:
		insert += "0,"
	if str(last_season_rank['RANK_PG_DREB']) != "None":
		insert += str(last_season_rank['RANK_PG_DREB']) + ","
	else:
		insert += "0,"
	if str(last_season_rank['RANK_FG3_PCT']) != "None":
		insert += str(last_season_rank['RANK_FG3_PCT']) + ","
	else:
		insert += "0,"
	if str(last_season_rank['RANK_PG_AST']) != "None":
		insert += str(last_season_rank['RANK_PG_AST']) + ","
	else:
		insert += "0,"
	if str(last_season_rank['RANK_PG_BLK']) != "None":
		insert += str(last_season_rank['RANK_PG_BLK']) + ","
	else:
		insert += "0,"
	if str(last_season_rank['RANK_PG_TOV']) != "None":
		insert += str(last_season_rank['RANK_PG_TOV']) + ","
	else:
		insert += "0,"
	if str(last_season_rank['RANK_FT_PCT']) != "None":
		insert += str(last_season_rank['RANK_FT_PCT']) + ","
	else:
		insert += "0,"
	if str(last_season_rank['RANK_FG_PCT']) != "None":
		insert += str(last_season_rank['RANK_FG_PCT']) + ","
	else:
		insert += "0,"
	if name in sal:
		insert += "\"" + str(sal[name]) + "\");"
	else:
		insert += "\"" + str(0) + "\");"
	print insert
	
