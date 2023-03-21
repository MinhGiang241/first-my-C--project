import React from 'react'
import { Tab } from 'semantic-ui-react'

export function ProfileContent(props: {}) {
  const panes = [
    { menuItem: "About", render: () => <Tab.Pane>About Content</Tab.Pane> },
    { menuItem: "Photos", render: () => <Tab.Pane>Photos Content</Tab.Pane> },
    { menuItem: "Events", render: () => <Tab.Pane>Events Content</Tab.Pane> },
    { menuItem: "Follower", render: () => <Tab.Pane>Follower Content</Tab.Pane> },
    { menuItem: "Following", render: () => <Tab.Pane>Following Content</Tab.Pane> },
  ]
  return (
    <Tab
      menu={{ fluid: true, vertical: true }}
      menuPosition='right'
      panes={panes} />


  )
}