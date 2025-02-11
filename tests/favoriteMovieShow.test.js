import FavoriteMovieView from '../src/scripts/views/pages/liked-movies/favorite-movie-view';
import FavoriteMovieShowPresenter from '../src/scripts/views/pages/liked-movies/favorite-movie-show-presenter';

describe('Showing all favorite movies', () => {
  let view;

  const renderTemplate = () => {
    view = new FavoriteMovieView();
    document.body.innerHTML = view.getTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  });

  describe('When no movies have been liked', () => {
    //sudah tidak dibutuhkan
    /*
    it('should render the information that no movies have been liked', () => {
      const favoriteMovies = {
        getAllMovies: jest.fn().mockImplementation(() => []),
      };

      const presenter = new FavoriteMovieShowPresenter({
        view,
        favoriteMovies,
      });

      const movies = [];
      presenter._displayMovies(movies);

      expect(document.querySelectorAll('.movie-item__not__found').length).toEqual(1);
    });
    */

    it('should ask for the favorite movies', () => {
      const favoriteMovies = {
        getAllMovies: jest.fn().mockImplementation(() => []),
      };

      new FavoriteMovieShowPresenter({
        view,
        favoriteMovies,
      });

      expect(favoriteMovies.getAllMovies).toHaveBeenCalledTimes(1);
    });

    it('should show the information that no movies have been liked', (done) => {
      document.getElementById('movies').addEventListener('movies:updated', () => {
        expect(document.querySelectorAll('.movie-item__not__found').length).toEqual(1);
        done();
      });

      const favoriteMovies = {
        getAllMovies: jest.fn().mockImplementation(() => []),
      };

      new FavoriteMovieShowPresenter({
        view,
        favoriteMovies,
      });
    });
  });

  describe('When favorite movies exist', () => {
    //sudah tidak dibutuhkan
    /*
    it('should render the movies', () => {
      const favoriteMovies = {
        getAllMovies: jest.fn().mockImplementation(() => []),
      };

      const presenter = new FavoriteMovieShowPresenter({
        view,
        favoriteMovies,
      });

      presenter._displayMovies([
        {
          id: 11,
          title: 'A',
          vote_average: 3,
          overview: 'Sebuah film A',
        },
        {
          id: 22,
          title: 'B',
          vote_average: 4,
          overview: 'Sebuah film B',
        },
      ]);

      expect(document.querySelectorAll('.movie-item').length).toEqual(2);
    });
    */

    it('should show the movies', (done) => {
      document.getElementById('movies').addEventListener('movies:updated', () => {
        expect(document.querySelectorAll('.movie-item').length).toEqual(2);
        done();
      });

      const favoriteMovies = {
        getAllMovies: jest.fn().mockImplementation(() => [
          {
            id: 11,
            title: 'A',
            vote_average: 3,
            overview: 'Sebuah film A',
          },
          {
            id: 22,
            title: 'B',
            vote_average: 4,
            overview: 'Sebuah film B',
          },
        ]),
      };

      new FavoriteMovieShowPresenter({
        view,
        favoriteMovies,
      });
    });
  });
});
