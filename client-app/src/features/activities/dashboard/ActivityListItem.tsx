import { format } from "date-fns";
import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Item, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityListItemAttendee from "./ActivityListItemAttendee";
interface Props {
  act: Activity;
}

export default function ActivityListItem({ act }: Props) {
  return (
    <Segment.Group>
      <Segment>
        {act.isCancel && (
          <Label
            attached="top"
            color="red"
            content="Canceled"
            style={{ textAlign: "center" }}
          ></Label>
        )}
        <Item.Group>
          <Item>
            <Item.Image
              style={{ marginBottom: 4 }}
              size="tiny"
              circular
              src={act.host?.image || "/assets/user.png"}
            />
            <Item.Content>
              <Item.Header as={Link} to={`/activities/${act.id}`}>
                {act.title}
              </Item.Header>
              <Item.Description>
                Hosted by <Link to={`/profile/${act.hostusername}`}>
                  {act.host?.displayName}
                </Link>
              </Item.Description>
              {act.isHost && (
                <Item.Description>
                  <Label basic color="orange">
                    You are hosting this activity
                  </Label>
                </Item.Description>
              )}
              {act.isGoing && !act.isHost && (
                <Item.Description>
                  <Label basic color="green">
                    You are going to this activity
                  </Label>
                </Item.Description>
              )}
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" />
          {format(act.date!, "dd MMM yyyy h:mm aa")}
          <Icon name="marker" />
          {act.venue}
        </span>
      </Segment>
      <Segment>
        <ActivityListItemAttendee attendees={act.attendees!} />
      </Segment>
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
