package backend;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Player {
	
	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;
	
	private String name;
	private String team;
	private int teamId;
	private int age;
	private int minutes;
	private double points;
	private double assists;
	private double rebounds;
	private double blocks;
	private double turnovers;
	private double steals;
	private double ft;
	private double fg;
	private double threept;
	private double gp;
	private double gs;
	private double fouls;
	private double dreb;
	private double oreb;
	private int threeptrank;
	private int rebrank;
	private int ptsrank;
	private int effrank;
	private int stlrank;
	private int orebrank;
	private int drebrank;
	private int threepctrank;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getTeam() {
		return team;
	}
	public void setTeam(String team) {
		this.team = team;
	}
	public int getTeamId() {
		return teamId;
	}
	public void setTeamId(int teamId) {
		this.teamId = teamId;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public int getMinutes() {
		return minutes;
	}
	public void setMinutes(int minutes) {
		this.minutes = minutes;
	}
	public double getPoints() {
		return points;
	}
	public void setPoints(double points) {
		this.points = points;
	}
	public double getAssists() {
		return assists;
	}
	public void setAssists(double assists) {
		this.assists = assists;
	}
	public double getRebounds() {
		return rebounds;
	}
	public void setRebounds(double rebounds) {
		this.rebounds = rebounds;
	}
	public double getBlocks() {
		return blocks;
	}
	public void setBlocks(double blocks) {
		this.blocks = blocks;
	}
	public double getTurnovers() {
		return turnovers;
	}
	public void setTurnovers(double turnovers) {
		this.turnovers = turnovers;
	}
	public double getSteals() {
		return steals;
	}
	public void setSteals(double steals) {
		this.steals = steals;
	}
	public double getFt() {
		return ft;
	}
	public void setFt(double ft) {
		this.ft = ft;
	}
	public double getFg() {
		return fg;
	}
	public void setFg(double fg) {
		this.fg = fg;
	}
	public double getThreept() {
		return threept;
	}
	public void setThreept(double threept) {
		this.threept = threept;
	}
	public double getGp() {
		return gp;
	}
	public void setGp(double gp) {
		this.gp = gp;
	}
	public double getGs() {
		return gs;
	}
	public void setGs(double gs) {
		this.gs = gs;
	}
	public double getFouls() {
		return fouls;
	}
	public void setFouls(double fouls) {
		this.fouls = fouls;
	}
	public double getDreb() {
		return dreb;
	}
	public void setDreb(double dreb) {
		this.dreb = dreb;
	}
	public double getOreb() {
		return oreb;
	}
	public void setOreb(double oreb) {
		this.oreb = oreb;
	}
	public int getThreeptrank() {
		return threeptrank;
	}
	public void setThreeptrank(int threeptrank) {
		this.threeptrank = threeptrank;
	}
	public int getRebrank() {
		return rebrank;
	}
	public void setRebrank(int rebrank) {
		this.rebrank = rebrank;
	}
	public int getPtsrank() {
		return ptsrank;
	}
	public void setPtsrank(int ptsrank) {
		this.ptsrank = ptsrank;
	}
	public int getEffrank() {
		return effrank;
	}
	public void setEffrank(int effrank) {
		this.effrank = effrank;
	}
	public int getStlrank() {
		return stlrank;
	}
	public void setStlrank(int stlrank) {
		this.stlrank = stlrank;
	}
	public int getOrebrank() {
		return orebrank;
	}
	public void setOrebrank(int orebrank) {
		this.orebrank = orebrank;
	}
	public int getDrebrank() {
		return drebrank;
	}
	public void setDrebrank(int drebrank) {
		this.drebrank = drebrank;
	}
	public int getThreepctrank() {
		return threepctrank;
	}
	public void setThreepctrank(int threepctrank) {
		this.threepctrank = threepctrank;
	}
	public int getAstrank() {
		return astrank;
	}
	public void setAstrank(int astrank) {
		this.astrank = astrank;
	}
	public int getBlkrank() {
		return blkrank;
	}
	public void setBlkrank(int blkrank) {
		this.blkrank = blkrank;
	}
	public int getTovrank() {
		return tovrank;
	}
	public void setTovrank(int tovrank) {
		this.tovrank = tovrank;
	}
	public int getFtrank() {
		return ftrank;
	}
	public void setFtrank(int ftrank) {
		this.ftrank = ftrank;
	}
	public int getFgrank() {
		return fgrank;
	}
	public void setFgrank(int fgrank) {
		this.fgrank = fgrank;
	}
	public String getSalary() {
		return salary;
	}
	public void setSalary(String salary) {
		this.salary = salary;
	}
	private int astrank;
	private int blkrank;
	private int tovrank;
	private int ftrank;
	private int fgrank;
	private String salary;
}
