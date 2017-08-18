package backend;

import org.springframework.data.repository.CrudRepository;

import backend.Player;

public interface PlayerRepository extends CrudRepository<Player, Long> {

	Player findById(int id);

	Iterable<Player> findByTeamId(Integer teamId);

}
