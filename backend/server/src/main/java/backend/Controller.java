package backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
class Controller {
	@Autowired
	private PlayerRepository playerRepository;
	@Autowired
	private TeamRepository teamRepository;
	
	@CrossOrigin
    @RequestMapping("/players")
    public Iterable<Player> players() {
        return playerRepository.findAll();
    }
	
	@CrossOrigin
    @RequestMapping("/players/{id}")
    public Iterable<Player> playersByTeam(@PathVariable(value="id") int id) {
        Team t = teamRepository.findById(id);
        Iterable<Player> p = playerRepository.findByTeamId(t.getTeamId());
        return p;
    }
	
	@CrossOrigin
    @RequestMapping("/player/{id}")
    public Player player(@PathVariable(value="id") int id) {
        return playerRepository.findById(id);
    }
    
	@CrossOrigin
    @RequestMapping("/teams")
    public Iterable<Team> teams() {
        return teamRepository.findAllByOrderByConfrankAsc();
    }
	
	@CrossOrigin
    @RequestMapping("/eastTeams")
    public Iterable<Team> teamsEast() {
        return teamRepository.findByConferenceOrderByConfrankAsc("East");
    }
	
	@CrossOrigin
    @RequestMapping("/westTeams")
    public Iterable<Team> teamsWest() {
        return teamRepository.findByConferenceOrderByConfrankAsc("West");
    }
	
	@CrossOrigin
    @RequestMapping("/team/{id}")
    public Team team(@PathVariable(value="id") int id) {
        return teamRepository.findById(id);
    }
}