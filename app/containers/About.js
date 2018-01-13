import React, { Component } from 'react'
import { connect } from 'react-redux'

class About extends Component {

  render() {
    return (
      <div>
        <br/>
        <h3>About me</h3>
        <hr/>
        <p>
          I&lsquo;m a Computer Science undergraduate student at Ohio University (class of 2019)
          studying machine learning and neuroscience.
          I&lsquo;m focusing on deep learning and reinforcement learning:
          I implemented A3C, A2C, and Proximal Policy Optimization in Pytorch
          (<a href="https://github.com/lnpalmer/PPO">lnpalmer/PPO</a>)
          and am building towards a published research project.
          Right now I&lsquo;m reading up on ML/RL/DL and neuroscience,
          with secondary interest in natural language processing and program synthesis.
        </p>
        <p>
          I explored game development for a few years, making game prototypes with Unity 3D
          and pure C++&#47;OpenGL setups. I made a retro dungeon crawler <a href="https://lukaspalmer.itch.io/labyrinth">Labyrinth</a> with Lua and the Defold game engine.
          Over summer 2016, I interned at Hyland Software in Cleveland, OH writing internal applications for the development team.
          In 2017, I interned with Argo AI in Pittsburgh, PA building production labeling software for their autonomous vehicle program.
        </p>
        <a href="https://drive.google.com/open?id=1xuWeXWtSWuLo92c0oy3dQEcOw7G8NwXa">Resume</a>
      </div>
    )
  }

}

export default About
