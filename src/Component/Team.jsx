import React from 'react'

const Team = () => {
    const myTeam = [
        {id:1, name: 'Name', title: 'Title', description:'Dec id elit non mi porta gravida at eget metus. Blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida at eget metus. Blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida donec id elit non mi porta gravida at eget metus. Blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida at eget metus. Blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida.'},
        {id:2, name: 'Name', title: 'Title', description:'Dec id elit non mi porta gravida at eget metus. Blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida at eget metus. Blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida donec id elit non mi porta gravida at eget metus. Blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida at eget metus. Blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida.',},
        {id:3, name: 'Name', title: 'Title', description:'Dec id elit non mi porta gravida at eget metus. Blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida at eget metus. Blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida donec id elit non mi porta gravida at eget metus. Blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida at eget metus. Blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida.',}
    ]
  return (
    <div>
        <div className="team-container">
            {myTeam.map(card => (
                <div className="team-card">
                    <img src="https://images.unsplash.com/photo-1664575198263-269a022d6e14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div>
                        <h3>{card.name}</h3>
                        <h4>{card.title}</h4>
                        <p>{card.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Team