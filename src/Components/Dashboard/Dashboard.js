import React from 'react';
import Header from '../Header/Header';
import WidgetBar from '../Chart/WidgetBar';
import WidgetDoughnut from '../Chart/WidgetDoughnut';
import Widget from '../Widget/Widget';
import { Container, Col, Row } from 'react-bootstrap';

const config = {
    apiKey: 'AIzaSyDMu-Vw30ykPPmFT3cXeunzKEi4EahzglI',
    spreadsheetId: '1vcDPrMexD8bxNwwzK9IxF8wch6Hfezq2eooJACDiqgg'
}
const url = `https://sheets.googleapis.com/v4/spreadsheets/${config.spreadsheetId
    }/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=${config.apiKey}`;
class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            dropdownOptions: [],
            trendStore: [],
            selectedValue: null,
            organicSource: null,
            directSource: null,
            referralSource: null,
            pageViews: null,
            users: null,
            newUsers: null,
            sessions: null,
            social_source: null
        };
    }

    getData = arg => {

        const arr = this.state.items;
        const arrLen = arr.length;
        let organicSource = 0;
        let directSource = 0;
        let referralSource = 0;
        let newUsers = 0;
        let users = 0;
        let pageViews = 0;
        let sessions = 0;
        let social_source = 0;
        let selectedValue = null;
  

        for (let i = 0; i < arrLen; i++) {
            if (arg === arr[i]["month"]) {

                organicSource = arr[i].organic_source;
                directSource = arr[i].direct_source;
                pageViews = arr[i].page_views;
                referralSource = arr[i].referral_source;
                newUsers = arr[i].new_users;
                users = arr[i].users;
                social_source = arr[i].social_source;
                sessions = arr[i].sessions;
            }
        }
        selectedValue = arg;

        this.setState({
            organicSource: organicSource,
            directSource: directSource,
            pageViews: pageViews,
            referralSource: referralSource,
            newUsers: newUsers,
            users: users,
            social_source: social_source,
            sessions: sessions
        });
    };

    updateDashboard = event => {
        this.getData(event.value);
        this.setState({ selectedValue: event.value }, () => { console.log(this.state.newUsers); });
    };

    componentDidMount() {
        fetch(url)
            .then(response => response.json())
            .then(data => {

                let batchRowValues = data.valueRanges[0].values;

                const rows = [];

                for (let i = 1; i < batchRowValues.length; i++) {
                    let rowObject = {};
                    for (let j = 0; j < batchRowValues[i].length; j++) {
                        rowObject[batchRowValues[0][j]] = batchRowValues[i][j];
                    }
                    rows.push(rowObject);
                }

                // dropdown options
                let dropdownOptions = [];

                for (let i = 0; i < rows.length; i++) {
                    dropdownOptions.push(rows[i].month);
                }

                dropdownOptions = Array.from(new Set(dropdownOptions)).reverse();
                this.setState(
                    {
                        items: rows,
                        dropdownOptions: dropdownOptions,
                        selectedValue: "Jan 2018"
                    },
                    () => this.getData("Jan 2018")
                );

            });
    }
    render() {
        return (
            <div>
                <Header options={this.state.dropdownOptions} onChange={this.updateDashboard} value={this.state.selectedValue} />
                <Container>
                    <Row>
                        <Col xs={12} md={4}>
                            <WidgetBar title="Source Comparison" orgValue={this.state.organicSource} dirValue={this.state.directSource} refValue={this.state.referralSource} />
                        </Col>
                        <Col xs={12} md={8}>
                            <WidgetDoughnut title="Users Comparison" user={this.state.users} newUser={this.state.newUsers} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={4}>
                            <Widget title="Organic Source" value={this.state.organicSource} />
                        </Col>
                        <Col xs={6} md={4}>
                            <Widget title="Direct Source" value={this.state.directSource} />
                        </Col>
                        <Col xs={6} md={4}>
                            <Widget title="Referral Source" value={this.state.referralSource} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>
                            <Widget title="Social Source" value={this.state.social_source} />
                        </Col>
                        <Col xs={12} md={6}>
                            <Widget title="Sessions" value={this.state.sessions} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={4}>
                            <Widget title="New Users" value={this.state.newUsers} />
                        </Col>
                        <Col xs={6} md={4}>
                            <Widget title="Users" value={this.state.users} />
                        </Col>
                        <Col xs={12} md={4}>
                            <Widget title="Page Views" value={this.state.pageViews} />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Dashboard;
