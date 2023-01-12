import React, { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Item, Label } from "semantic-ui-react";
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
    <Item key={act.id}>
      <Item.Content>
        <Item.Header as="a">{act.title}</Item.Header>
        <Item.Meta>{act.date}</Item.Meta>
        <Item.Description>
          <div>{act.description}</div>
          <div>
            {act.city}, {act.venue}
          </div>
        </Item.Description>
        <Item.Extra>
          <Button
            as={Link}
            to={`/activities/${act.id}`}
            floated="right"
            content="View"
            color="blue"
          />
          <Button
            name={act.id}
            loading={loading && target === act.id}
            onClick={(e) => handleActivityDelete(e, act.id)}
            floated="right"
            content="Delete"
            color="red"
          />
          <Label basic content={act.category} />
        </Item.Extra>
      </Item.Content>
    </Item>
  );
}
