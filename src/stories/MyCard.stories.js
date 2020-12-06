import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { action } from '@storybook/addon-actions';
import MyCard from "../components/MyCard";
import { withKnobs, text, boolean, color, select } from "@storybook/addon-knobs";
import 'bootstrap/dist/css/bootstrap.css';

const colors = ["btn-primary", "btn-success", "btn-danger", "btn-warning", "btn-info"]

export default {
  title: 'MyCard',
  component: MyCard,
  decorators: [withKnobs],
};

export const Default = () => (
  <MyCard
    backgroundColor={color("Couleur de fond", "#fff")}
    title={text("Titre", "Card titles")}
    description={text("Description", "Some quick example text to build on the card title and make up the bulk of the card's content.")}
    showButton={boolean("Afficher bouton", true)}
    btn={{
      url: text("Bouton - url", "/"),
      color: select("Bouton - couleur", colors, "btn-primary"),
      text: text("Bouton - texte", "Go somewhere"),
      onClick: action('button-click')
    }}
  />
);

Default.story = {
  name: 'Cas par défaut',
};
