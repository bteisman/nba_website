from bs4 import BeautifulSoup
import urllib

class salary:
	salaries = {}
	team_colors = {}
	new_teams = {}

	def __init__(self):
		self.parse_salaries()
		self.parse_colors()

	def parse_salaries(self):
		for i in range(1, 13):
			r = urllib.urlopen('http://www.espn.com/nba/salaries/_/year/2017/page/'+str(i)+'/seasontype/4').read()
			soup = BeautifulSoup(r, "html.parser")
			self.insert_salaries(soup, False)
		for i in range(1, 13):
			s = urllib.urlopen('http://www.espn.com/nba/salaries/_/year/2018/page/'+str(i)+'/seasontype/4').read()
			soup = BeautifulSoup(s, "html.parser")
			self.insert_salaries(soup, True)
		r = urllib.urlopen('http://hoopshype.com/salaries/players/').read()
		soup = BeautifulSoup(r, "html.parser")
		self.insert_salaries_hoop(soup)

	def insert_salaries(self, soup, second):
		table = soup.findChildren("table")
		rows = table[0].findChildren("tr")
		for row in rows:
			cells = row.findChildren('td')
			a = row.findChildren("a")
			cellcount = 0
			acount = 0
			name = ""
			salary = ""
			team = ""
			for value in a:
				if acount == 0:
					name = value.text
				acount += 1
			for cell in cells:
				if cellcount == 2:
					team = cell.text
				if cellcount == 3:
					salary = cell.text
				cellcount += 1
			self.salaries[name] = salary
			#only update new teams if it is 2018
			if second:
				self.new_teams[name] = team

	#hoopshype has more salaries
	def insert_salaries_hoop(self, soup):
		table = soup.findChildren("table")
		rows = table[0].findChildren("tr")
		for row in rows:
			cells = row.findChildren('td')
			a = row.findChildren("a")
			cellcount = 0
			acount = 0
			name = ""
			salary = ""
			for value in a:
				if acount == 0:
					name = value.text
				acount += 1
			for cell in cells:
				if cellcount == 2:
					salary = cell.text
				cellcount += 1
			name = name.strip()
			salary = salary.strip()
			self.salaries[name] = salary

	def parse_colors(self):
		self.team_colors["Atlanta Hawks"] = ["#E03A3E","#C3D600"]
		self.team_colors["Boston Celtics"] = ["#008348","#FFFFFF"]
		self.team_colors["Cleveland Cavaliers"] = ["#860038","#FDBB30"]
		self.team_colors["New Orleans Pelicans"] = ["#002B5C","#B4975A"]
		self.team_colors["Chicago Bulls"] = ["#CE1141","#FFFFFF"]
		self.team_colors["Dallas Mavericks"] = ["#007DC5","#C4CED3"]
		self.team_colors["Denver Nuggets"] = ["#4FA8FF","#FFB20F"]
		self.team_colors["Golden State Warriors"] = ["#006BB6","#FFC72D"]
		self.team_colors["Houston Rockets"] = ["#CE1141","#FDB927"]
		self.team_colors["LA Clippers"] = ["#ED174C","#006BB6"]
		self.team_colors["Los Angeles Lakers"] = ["#552582","#FDB927"]
		self.team_colors["Miami Heat"] = ["#98002E","#FFFFFF"]
		self.team_colors["Milwaukee Bucks"] = ["#00471B","#EEE1C6"]
		self.team_colors["Minnesota Timberwolves"] = ["#002B5C","#7AC143"]
		self.team_colors["Brooklyn Nets"] = ["#000000","#FFFFFF"]
		self.team_colors["New York Knicks"] = ["#006BB6","#F58426"]
		self.team_colors["Orlando Magic"] = ["#007DC5","#C4CED3"]
		self.team_colors["Indiana Pacers"] = ["#00275D","#FFC633"]
		self.team_colors["Philadelphia 76ers"] = ["#006BB6","#ED174C"]
		self.team_colors["Phoenix Suns"] = ["#1D1160","#E56020"]
		self.team_colors["Portland Trail Blazers"] = ["#F0163A","#B6BFBF"]
		self.team_colors["Sacramento Kings"] = ["#724C9F","#8E9090"]
		self.team_colors["San Antonio Spurs"] = ["#B6BFBF","#FFFFFF"]
		self.team_colors["Oklahoma City Thunder"] = ["#007DC3","#F05133"]
		self.team_colors["Toronto Raptors"] = ["#CE1141","#C4CED3"]
		self.team_colors["Utah Jazz"] = ["#002B5C","#F9A01B"]
		self.team_colors["Memphis Grizzlies"] = ["#23375B","#6189B9"]
		self.team_colors["Washington Wizards"] = ["#002566","#F5002F"]
		self.team_colors["Detroit Pistons"] = ["#006BB6","#ED174C"]
		self.team_colors["Charlotte Hornets"] = ["#1D1160","#008CA8"]

	def get_salaries(self):
		return self.salaries

	def get_colors(self):
		return self.team_colors

	def get_teams(self):
		return self.new_teams