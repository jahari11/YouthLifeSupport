import React from 'react'
import person1 from '../Assets/Person1.jpg';
import person2 from '../Assets/Person2.jpg'
import person3 from '../Assets/Person3.jpg'

const Team = () => {
    const myTeam = [
        {id:1, name: 'Name', title: 'Title', description:'Dec id elit non mi porta gravida at eget metus. Blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida at eget metus. Blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida donec id elit non mi porta gravida at eget metus. Blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida at eget metus. Blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida.', image:person2 },
        {id:2, name: 'Hopeton Smalling', title: 'Co-founder', description:'Hopeton Smalling is a New York-based author, humanitarian, Bitcoin evangelist, entrepreneur, tech guru, and award-winning educator with over 20 years of teaching experience. He is knowledgeable in economics, blockchain, cryptocurrency, and disruptive technologies. Starting his Bitcoin journey in 2012, he is respected in the industry for his steadfastness. As Co-CEO of Signature Deals, LLC, Smalling advises A-list clients on cryptocurrency. He also serves as President of One Crown Entertainment, Inc., where he launched "The Original Fire NFT" music-centric brand. He holds an MBA in Global Economics, an EdS, and a PhD abd in Leadership. Smalling is a reader, pilot, mentor, philanthropist, and social entrepreneur committed to making cryptocurrency accessible to everyone. His "The Black Picasso" NFT collection is available on OpenSea.io.', image:person1},
        {id:3, name: 'Name', title: 'Title', description:'Dec id elit non mi porta gravida at eget metus. Blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida at eget metus. Blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida donec id elit non mi porta gravida at eget metus. Blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida at eget metus. Blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida.', image: person3}
    ]
  return (
    <div className="team-section">
        <h2>Our Team</h2>
        <div className="team-grid">
            {myTeam.map(card => (
                <div key={card.id} className="team-card">
                    <img src={card.image} alt={card.name} />
                    <div className="team-card-content">
                        <h3>{card.name}</h3>
                        <p><strong>{card.title}</strong></p>
                        <p>{card.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Team