import { html } from "lit";
import "@components/header/header.js";
import "@components/button/button.js";
import "@components/chip/chip.js";
import "@components/card/card.js";

export default {
  title: "Pages/Demo",
  component: "tt-component",
  render: (args) => html`
    <tt-header>
      <h1 slot="start">${"<Demo>"}</h1>
      <div slot="center">
        <tt-menu inline="">
          <tt-menu-item href="javascript:void(0)">Trips</tt-menu-item>
          <tt-menu-item href="javascript:void(0)">Food</tt-menu-item>
          <tt-menu-item href="javascript:void(0)">Lodging</tt-menu-item>
          <tt-menu-item href="javascript:void(0)">How it works</tt-menu-item>
        </tt-menu>
      </div>
      <div slot="end">
        <tt-button>Book Now</tt-button>
      </div>
    </tt-header>
    <main>
      <h2>Kyoto Must-See Spots</h2>
      <style>
        .card-group {
          display: flex;
          flex-flow: row wrap;
          align-items: stretch;
          gap: 1rem;

          > tt-card {
            width: calc(33.33% - 1rem);
            min-height: 415px;
          }
        }
      </style>
      <div class="card-group">
        <tt-card>
          <h3 slot="header" class="tt-card__title">Gion District</h3>
          <img
            slot="media"
            src="https://images.unsplash.com/photo-1624253346805-df69ad2b3d7f?q=80&w=500&h=200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="A placeholder image"
          />
          <p>
            Lantern-lit wooden houses lead toward a distant pagoda in Kyoto,
            where quiet streets glow against the surrounding trees.
          </p>
          <tt-button slot="footer">Explore Gion</tt-button>
        </tt-card>
        <tt-card>
          <h3 slot="header" class="tt-card__title">Hōkan-ji Temple</h3>
          <img
            slot="media"
            src="https://images.unsplash.com/photo-1717303554645-e3c4fdffe8ae?q=80&w=500&h=200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA"
            alt="A placeholder image"
          />
          <p>
            A five‑tier pagoda rises above the wooden townhouses, anchoring the
            quiet Kyoto street in timeless tradition.
          </p>
          <tt-button slot="footer">Explore the temple</tt-button>
        </tt-card>
        <tt-card>
          <h3 slot="header" class="tt-card__title">Bamboo Forest</h3>
          <img
            slot="media"
            src="https://images.unsplash.com/photo-1607619662634-3ac55ec0e216?q=80&w=500&h=200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="A placeholder image"
          />
          <div>
            <tt-chip>Top rated</tt-chip>
            <p>
              Bamboo trail in Kyoto, where a quiet wooden bridge disappears into
              deep green forest and soft filtered light.
            </p>
          </div>
          <tt-button slot="footer">Explore Bamboo Forest</tt-button>
        </tt-card>
      </div>
    </main>
  `,
  args: {},
};

export const Default = {};
