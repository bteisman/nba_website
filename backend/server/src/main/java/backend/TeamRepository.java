package backend;

import org.springframework.data.repository.CrudRepository;

import backend.Team;

public interface TeamRepository extends CrudRepository<Team, Long> {

	Team findById(int id);

	Iterable<Team> findAllByOrderByConfrankAsc();

	Iterable<Team> findByConferenceOrderByConfrankAsc(String string);

}
