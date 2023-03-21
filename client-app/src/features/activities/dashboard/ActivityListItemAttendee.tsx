import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import { Image, List, Popup } from "semantic-ui-react";
import { Profile } from "../../../app/models/profile";
import ProfileCard from "../../profiles/ProfileCard";

interface Props {
  attendees: Profile[];
}

export default observer(function ActivityListItemAttendee({
  attendees,
}: Props) {
  return (
    <List horizontal>
      {attendees.map((atttendee) => (
        <Popup
          hoverable
          key={atttendee.username}
          trigger={
            <List.Item
              key={atttendee.username}
              as={Link}
              to={`/profiles/${atttendee.username}`}
            >
              <Image
                size="mini"
                circular
                src={atttendee.image || "/assets/user.png"}
              />
            </List.Item>
          }
        >
          <Popup.Content>
            <ProfileCard profile={atttendee} />
          </Popup.Content>
        </Popup>
      ))}
    </List>
  );
});