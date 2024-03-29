/*
 * Created by Robert Chang 15 March 2020
 */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Country from "../components/maps/country";
import InfoBoard from "../components/infoBoard";
import Summary from "../components/summary";
import Router from "next/router";
import Grid from "@material-ui/core/Grid";
import { getAustraliaToday } from "../services/api";
import { useAsync } from "react-async";
import "whatwg-fetch";
import { only, down } from "styled-breakpoints";
import Layout from "../components/MyLayout";
import InfoBanner from "../components/InfoBanner";
import NotificationBanner from "../components/notificationBanner";
import colours from "../styles/colours";
import {
  curry,
  reduce,
  assoc,
  keys,
  compose,
  map,
  pick,
  sort,
  descend,
  prop,
} from "ramda";
import CountryPieWithLineCharts from "../components/charts/country/pieWithLine/pieWithLine";
import CountryBarLabelRotation from "../components/charts/country/barLabelRotation/barLabelRotation";
import CountryDailyTotalIncreaseBar from "../components/charts/country/dailyTotalIncreaseBar/dailyTotalIncreaseBar";

const SiteContent = styled(Grid)`
  padding-top: 66px;
`;

const NewFeature = styled(Grid)`
  padding-top: 15px;
  color: ${colours.dimWhite};
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;

const IFrameHolder = styled(Grid)`
  overflow: hidden;
  // Calculated from the aspect ration of the content (in case of 16:9 it is 9/16= 0.5625)
  padding-top: 56.25%;
  position: relative;
`;

const IFrameContainer = styled.iframe`
  border: 0;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const IFrameMiddle = styled.div`
  height: 1050px;
  ${down("tablet")} {
    height: 530px;
  }
  ${only("tablet")} {
    height: 530px;
  }
`;

const NewCarousel = styled(Grid)`
  padding-top: 15px;
  padding-bottom: 15px;
  color: ${colours.dimWhite};
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;

const Carousel = styled(Grid)`
  margin: 0 auto !important;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 30px;
`;

export default function Index() {
  const {
    data: dataAustraliaRaw,
    error: errorAustralia,
    isLoading: isLoadingAustralia,
  } = useAsync({
    promiseFn: getAustraliaToday,
  });
  const guimUrl =
    "https://interactive.guim.co.uk/embed/iframeable/2020/04/australian-states-corona-maps-v2/html/index.html?state=";

  const [toDisplayData, setToDisplayData] = useState("");
  const [toDisplayDataAustralia, setToDisplayDataAustralia] = useState("");
  const [toDisplayTotal, setToDisplayTotal] = useState("");
  const [toDisplayTimestamp, setToDisplayTimestamp] = useState("");

  const [location, setLocation] = useState("australia");

  const sortList = compose(sort(descend(prop("total_cases"))));

  useEffect(() => {
    /* Ok, time is real tight to release, I can't figure out
     * a re-render issue, so let's repeat some code */
    if (dataAustraliaRaw) {
      const { country, states: list, timestamp } = dataAustraliaRaw;
      let sortedList = sortList(list);
      const toDisplay = {
        total: country[0],
        list: sortedList,
        type: "country",
      };
      setToDisplayData(toDisplay);
      setToDisplayDataAustralia(toDisplay);
      setToDisplayTotal(country[0]);
      setToDisplayTimestamp(timestamp);
    }
  }, [dataAustraliaRaw]);

  const handleCountryChange = (e) => {
    if (e.target.value) {
      if (e.target.value === "world") {
        Router.push("/");
      } else {
        Router.push(`/${e.target.value}`);
      }
    }
  };

  return (
    <Layout>
      <SiteContent container spacing={1}>
        <Grid item xs={12} lg={12}>
          <Summary country={location} total={toDisplayTotal} />
        </Grid>
        <Grid item xs={12} lg={6}>
          <NotificationBanner location={location} />
        </Grid>
        <Grid item xs={12} lg={6}>
          <InfoBanner
            location={location}
            data={toDisplayData}
            total={toDisplayTotal}
            handleCountryChange={handleCountryChange}
          />
        </Grid>
        <Grid item xs={12} lg={12}>
          <InfoBoard country={location} data={toDisplayDataAustralia} />
        </Grid>
        <Grid item xs={12} lg={6} style={{ padding: "0 20px" }}>
          <>
            <NewFeature item xs={12} lg={12}>
              Daily Increases view in states and territories over time
            </NewFeature>
            <CountryBarLabelRotation location={location} />
          </>
        </Grid>
        <Grid item xs={12} lg={6} style={{ padding: "0 20px" }}>
          <>
            <NewFeature item xs={12} lg={12}>
              Daily New Cases and Death in Australia
            </NewFeature>
            <CountryDailyTotalIncreaseBar location={location} />
          </>
        </Grid>
        <Grid
          container
          item
          xs={12}
          lg={6}
          style={{
            padding: "0 20px",
          }}
        >
          <Grid item xs={12} lg={12}>
            <Country
              data={toDisplayData}
              location={location}
              timestamp={toDisplayTimestamp}
            />
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          style={{
            padding: "0 10px",
          }}
        >
          <>
            <NewFeature item xs={12} lg={12}>
              Cumulative view of diagnoses in states and territories over time
            </NewFeature>
            <CountryPieWithLineCharts location={location} />
          </>
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          style={{
            padding: "0 10px",
          }}
        >
          <>
            <NewFeature item xs={12} lg={12}>
              NSW COVID-19 case locations map
              <br />
              <br />
              <br />
            </NewFeature>
          </>
        </Grid>
        <IFrameHolder
          item
          xs={12}
          lg={6}
          style={{
            margin: "0 10px",
            background: "white",
          }}
        >
          <IFrameMiddle>
            <IFrameContainer
              src={`https://nswdac-covid-19-postcode-heatmap.azurewebsites.net/case_locations_map.html`}
              scrolling="no"
              frameborder="0"
              allowfullscreen=""
            ></IFrameContainer>{" "}
          </IFrameMiddle>
        </IFrameHolder>

        <Grid
          item
          xs={12}
          lg={6}
          style={{
            padding: "0 10px",
          }}
        >
          <>
            <NewFeature item xs={12} lg={12}>
              If you are in the local government areas of Bayside, Blacktown, Burwood, Campbelltown, Canterbury-Bankstown, Cumberland, Fairfield, Georges River, Liverpool, Parramatta Strathfield or some suburbs of Penrith, go to the local government areas of concern (Sydney) to show a distance of 5km.

              <br />
              <br />
            </NewFeature>
          </>
        </Grid>
        <IFrameHolder
          item
          xs={12}
          lg={6}
          style={{
            margin: "0 10px",
            background: "white",
          }}
        >
          <IFrameMiddle>
            <IFrameContainer
              src={`https://lpinsw.maps.arcgis.com/apps/webappviewer/index.html?id=bd404f661cca43faa21af05a16121cd5`}
              scrolling="no"
              frameborder="0"
              allowfullscreen=""
            ></IFrameContainer>{" "}
          </IFrameMiddle>
        </IFrameHolder>
        <IFrameHolder
          item
          xs={12}
          lg={12}
          style={{
            margin: "0 10px",
            background: "white",
          }}
        >
          <IFrameMiddle>
            <IFrameContainer
              src={`${guimUrl}NSW`}
              scrolling="no"
              frameborder="0"
              allowfullscreen=""
            ></IFrameContainer>{" "}
          </IFrameMiddle>
        </IFrameHolder>
        <IFrameHolder
          item
          xs={12}
          lg={12}
          style={{
            margin: "0 10px",
          }}
        >
          <IFrameMiddle>
            <IFrameContainer
              src={`${guimUrl}VIC`}
              scrolling="no"
              frameborder="0"
              allowfullscreen=""
            ></IFrameContainer>{" "}
          </IFrameMiddle>
        </IFrameHolder>
        <IFrameHolder
          item
          xs={12}
          lg={12}
          style={{
            margin: "0 10px",
          }}
        >
          <IFrameMiddle>
            <IFrameContainer
              src={`${guimUrl}QLD`}
              scrolling="no"
              frameborder="0"
              allowfullscreen=""
            ></IFrameContainer>{" "}
          </IFrameMiddle>
        </IFrameHolder>
      </SiteContent>
    </Layout>
  );
}
