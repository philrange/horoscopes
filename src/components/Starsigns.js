import React from 'react'
import { Link } from 'gatsby'

const StarsignCard = props => (
    
<div class="column">
    <Link to={props.to}>
        <div class="card">
            <div class="card-image">
                <figure class="image is-64x64">
                    <img src="https://bulma.io/images/placeholders/64x64.png" alt="Placeholder"/>
                </figure>
            </div>
            <div class="card-content">
                <p class="title is-6">{props.children}</p>
            </div>
    
        </div>
    </Link>
</div>
)


export default function Starsigns() {
  return (
      
      <div class="columns">
          <StarsignCard to="/aries">Aries</StarsignCard>
          <StarsignCard to="/taurus">Taurus</StarsignCard>
          <StarsignCard to="/gemini">Gemini</StarsignCard>
          <StarsignCard to="/cancer">Cancer</StarsignCard>
          <StarsignCard to="/leo">Leo</StarsignCard>
          <StarsignCard to="/virgo">Virgo</StarsignCard>
          <StarsignCard to="/libra">Libra</StarsignCard>
          <StarsignCard to="/scorpio">Scorpio</StarsignCard>
          <StarsignCard to="/sagittarius/">Sagittarius</StarsignCard>
          <StarsignCard to="/capricorn/">Capricorn</StarsignCard>
          <StarsignCard to="/aquarius/">Aquarius</StarsignCard>
          <StarsignCard to="/pisces/">Pisces</StarsignCard>
      </div>
  )
}