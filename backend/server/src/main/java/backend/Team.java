package backend;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Team {
	
	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;
	private Integer teamId;
	private String team;
	private String conference;
	private String division;
	private int wins;
	private int losses;
	private int confrank;
	private double pts;
	private double asts;
	private double reb;
	private double opppts;
	private int ptsrank;
	private int astsrank;
	private int rebrank;
	private int oppptsrank;
	private String color;
	private String secondcolor;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getTeamId() {
		return teamId;
	}
	public void setTeamId(Integer teamId) {
		this.teamId = teamId;
	}
	public String getTeam() {
		return team;
	}
	public void setTeam(String team) {
		this.team = team;
	}
	public String getConference() {
		return conference;
	}
	public void setConference(String conference) {
		this.conference = conference;
	}
	public String getDivision() {
		return division;
	}
	public void setDivision(String division) {
		this.division = division;
	}
	public int getWins() {
		return wins;
	}
	public void setWins(int wins) {
		this.wins = wins;
	}
	public int getLosses() {
		return losses;
	}
	public void setLosses(int losses) {
		this.losses = losses;
	}
	public int getConfrank() {
		return confrank;
	}
	public void setConfrank(int confrank) {
		this.confrank = confrank;
	}
	public double getPts() {
		return pts;
	}
	public void setPts(double pts) {
		this.pts = pts;
	}
	public double getAsts() {
		return asts;
	}
	public void setAsts(double asts) {
		this.asts = asts;
	}
	public double getReb() {
		return reb;
	}
	public void setReb(double reb) {
		this.reb = reb;
	}
	public double getOpppts() {
		return opppts;
	}
	public void setOpppts(double opppts) {
		this.opppts = opppts;
	}
	public int getPtsrank() {
		return ptsrank;
	}
	public void setPtsrank(int ptsrank) {
		this.ptsrank = ptsrank;
	}
	public int getAstsrank() {
		return astsrank;
	}
	public void setAstsrank(int astsrank) {
		this.astsrank = astsrank;
	}
	public int getRebrank() {
		return rebrank;
	}
	public void setRebrank(int rebrank) {
		this.rebrank = rebrank;
	}
	public int getOppptsrank() {
		return oppptsrank;
	}
	public void setOppptsrank(int oppptsrank) {
		this.oppptsrank = oppptsrank;
	}
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}
	public String getSecondcolor() {
		return secondcolor;
	}
	public void setSecondcolor(String secondcolor) {
		this.secondcolor = secondcolor;
	}
}

