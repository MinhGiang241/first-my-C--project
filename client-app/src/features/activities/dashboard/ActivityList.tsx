import { observer } from "mobx-react-lite";
import React, { Fragment } from "react";
import { Header, Item, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { useStore } from "../../../app/stores/store";
import ActivityListItem from "./ActivityListItem";

export default observer(function ActivityList() {
  const { activityStore } = useStore();
  const { groupdActivities } = activityStore;

  return (
    <>
      {groupdActivities.map(([group, activities]) => (
        <Fragment key={group}>
          <Header sub color="teal">
            {group}
          </Header>
          {activities.map((act: Activity) => (
            <ActivityListItem act={act} />
          ))}
        </Fragment>
      ))}
    </>
  );
});
