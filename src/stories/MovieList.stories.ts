import MovieList from '@/components/MovieList.vue';
import { Meta, Story } from '@storybook/vue3';
import { defineComponent } from 'vue';

export default {
  title: 'Components/MovieList',
  component: MovieList,
  decorators: [() => ({
    template: '<div class="bg-stone-800 min-h-screen h-full p-4"><story/></div>',
  })],
} as Meta;

const MovieListTemplate: Story = (args) => defineComponent({
  components: {
    MovieList,
  },
  setup: () => ({ args }),
  template: '<movie-list v-bind="args"></movie-list>',
});

export const Empty = MovieListTemplate.bind(this);

Empty.args = {
  items: [],
};

export const Many = MovieListTemplate.bind(this);

Many.args = {
  items: [
    {
      id: 337167,
      title: 'Fifty Shades Freed',
      tagline: "Don't miss the climax",
      vote_average: 6.1,
      vote_count: 1195,
      release_date: '2018-02-07',
      poster_path: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
      overview: 'Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.',
      budget: 55000000,
      revenue: 136906000,
      genres: ['Drama', 'Romance'],
      runtime: 106,
    }, {
      id: 181808,
      title: 'Star Wars: The Last Jedi',
      tagline: 'The Saga Continues',
      vote_average: 7.1,
      vote_count: 4732,
      release_date: '2017-12-13',
      poster_path: 'https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg',
      overview: 'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.',
      budget: 200000000,
      revenue: 1325937250,
      genres: ['Fantasy', 'Adventure', 'Science Fiction'],
      runtime: 152,
    }, {
      id: 284054,
      title: 'Black Panther',
      tagline: 'Long live the king',
      vote_average: 7.3,
      vote_count: 3788,
      release_date: '2018-02-13',
      poster_path: 'https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg',
      overview: "King T'Challa returns home from America to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new leader. However, T'Challa soon finds that he is challenged for the throne by factions within his own country as well as without.  Using powers reserved to Wakandan kings, T'Challa assumes the Black Panther mantel to join with girlfriend Nakia, the queen-mother, his princess-kid sister,  members of the Dora Milaje (the Wakandan \"special forces\"), and an American secret agent, to prevent Wakanda from being dragged into a world war.",
      budget: 200000000,
      revenue: 1245257672,
      genres: ['Action', 'Adventure', 'Fantasy', 'Science Fiction'],
      runtime: 134,
    }, {
      id: 354912,
      title: 'Coco',
      tagline: 'The celebration of a lifetime',
      vote_average: 7.8,
      vote_count: 3619,
      release_date: '2017-10-27',
      poster_path: 'https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg',
      overview: "Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
      budget: 175000000,
      revenue: 700920729,
      genres: ['Adventure', 'Comedy', 'Family', 'Animation'],
      runtime: 105,
    }, {
      id: 333339,
      title: 'Ready Player One',
      tagline: 'A better reality awaits.',
      vote_average: 8.1,
      vote_count: 617,
      release_date: '2018-03-28',
      poster_path: 'https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg',
      overview: 'When the creator of a popular video game system dies, a virtual contest is created to compete for his fortune.',
      budget: 175000000,
      revenue: 0,
      genres: ['Adventure', 'Science Fiction', 'Action'],
      runtime: 140,
    },
    {
      id: 2842054,
      title: 'Black Panther',
      tagline: 'Long live the king',
      vote_average: 7.3,
      vote_count: 3788,
      release_date: '2018-02-13',
      poster_path: 'https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg',
      overview: "King T'Challa returns home from America to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new leader. However, T'Challa soon finds that he is challenged for the throne by factions within his own country as well as without.  Using powers reserved to Wakandan kings, T'Challa assumes the Black Panther mantel to join with girlfriend Nakia, the queen-mother, his princess-kid sister,  members of the Dora Milaje (the Wakandan \"special forces\"), and an American secret agent, to prevent Wakanda from being dragged into a world war.",
      budget: 200000000,
      revenue: 1245257672,
      genres: ['Action', 'Adventure', 'Fantasy', 'Science Fiction'],
      runtime: 134,
    },
  ],
};
