import React, { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Item, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { useStore } from "../../../app/stores/store";

interface Props {
  act: Activity;
}

export default function ActivityListItem({ act }: Props) {
  const { activityStore } = useStore();
  const { deleteActivity, loading } = activityStore;
  const [target, setTarget] = useState("");
  const handleActivityDelete = (
    e: SyntheticEvent<HTMLButtonElement>,
    id: string
  ) => {
    setTarget(e.currentTarget.name);
    deleteActivity(id);
  };
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src="/assets/user.png" />
            <Item.Content>
              <Item.Header as={Link} to={`/activities/${act.id}`}>
                {act.title}
              </Item.Header>
              <Item.Description>Hosted by Minh Giang</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" />
          {act.date}
          <Icon name="marker" />
          {act.venue}
        </span>
      </Segment>
      <Segment>Attendees go here</Segment>
      <Segment clearing>
        <span>{act.description}</span>
        <Button
          as={Link}
          to={`/activities/${act.id}`}
          color="teal"
          floated="right"
          content="View"
        />
      </Segment>
    </Segment.Group>
  );
}
