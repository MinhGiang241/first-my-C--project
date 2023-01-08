/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
interface Props {
  activity: Activity;
  cancelSelectActivity: () => void;
  openForm: (id?: string) => void;
  closeForm: () => void;
}
export default function ActivityDetails({
  activity,
  cancelSelectActivity,
  openForm,
  closeForm,
}: Props) {
  return (
    <Card fluid>
      {activity && (
        <Image
          src={`/assets/categoryImages/${activity.category}.jpg`}
          wrapped
          ui={false}
        />
      )}
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span className="date">{activity!.date} </span>
        </Card.Meta>
        <Card.Description>{activity.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths="2">
          <Button
            onClick={() => openForm(activity.id)}
            basic
            color="blue"
            content="Edit"
          ></Button>
          <Button
            onClick={() => cancelSelectActivity()}
            basic
            color="grey"
            content="Cancel"
          ></Button>
        </Button.Group>
      </Card.Content>
    </Card>
  );
}
