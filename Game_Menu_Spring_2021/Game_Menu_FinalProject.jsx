import React, { Component } from 'react';
import { AppRegistry, Dimensions, TouchableOpacity, Text, View, ScrollView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {

    state = {
        endScreenPageDisplay: 'block',
        newGame: false,
        player: [
            {
                name: 'CPU',
                wins: 0,
            },
            {
                name: 'Player 1',
                wins: 1,
            },
            {
                name: 'Player 2',
                wins: 3,
            },
        ],

    }

    //SOURCE (Sort array of objects numerically): https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/
    sortPlayerByWins = () => {
        let newArray = this.state.player.sort((a, b) => (a.wins > b.wins) ? -1 : 1);

        this.setState({
                resultsOne: newArray,
        })
    }

    render() {
        return (
            <View style={{ display: this.state.endScreenPageDisplay }}>
                <View style={styles.contentContainer}>
                    <View style={styles.endScreenTitle}>
                        <Text style={styles.endScreenTitleText}>
                            *Player 1* Wins
                        </Text>
                    </View>

                    <View style={styles.playerContainer}>
                        <View style={styles.playerTitle}>
                            <Text style={styles.playerTitleText}>
                                Leaderboard
                            </Text>
                        </View>
                        <View style={styles.rowplayerDataContainer}>
                            <View style={styles.individualplayerDataContainer}>
                                <Text style={styles.individualDataTitleText}>
                                    Player
                                </Text>
                            </View>
                            <View style={styles.individualplayerDataContainer}>
                                <Text style={styles.individualDataTitleText}>
                                    # Wins
                                </Text>
                            </View>
                        </View>

                        <ScrollView>
                            <View style={styles.playerBodyContainer}>
                                {this.state.player.map((myplayer) =>(
                                    <View style={styles.rowplayerDataContainer}>
                                        <View style={styles.individualplayerDataContainer}>
                                            <Text style={styles.individualDataText}>
                                                {myplayer.name}
                                            </Text>
                                        </View>
                                        <View style={styles.individualplayerDataContainer}>
                                            <Text style={styles.individualDataText}>
                                               {myplayer.wins}
                                            </Text>
                                        </View>
                                    </View>
                                ))}
                            </View>
                        </ScrollView>


                    </View>

                    <View style={styles.endScreenButtonContainer}>
                        <TouchableOpacity style={styles.endScreenButton}
                            onPress={() => {
                                this.sortPlayerByWins()
                            }}
                        >
                            <Text style={styles.endScreenButtonText}>
                                Play Again
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.endScreenButton}
                            onPress={() => {

                            }}
                        >
                            <Text style={styles.endScreenButtonText}>
                                Main Menu
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        height: deviceHeight,
        backgroundColor:'#ffffba',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'column',
    },

    /*
      Displays Who Won
      textShadowColor (Kudos to Michael): https://stackoverflow.com/questions/46387355/text-shadow-in-react-native
    */
    endScreenTitle: {
        height: deviceHeight/7,
        width: 4*deviceWidth/5,
        borderRadius: deviceWidth/50,
        backgroundColor:'#4ebcc2',
        justifyContent: 'center',
    },
    endScreenTitleText: {
        textAlign: 'center',
        color:'lightpink',
        fontSize: deviceHeight/15,
        fontWeight: 'bold',
        marginBottom: deviceHeight/17,
        marginTop: deviceHeight/20,
            textShadowColor:'gray',
            textShadowOffset:{width: deviceHeight / 150, height: deviceHeight / 150},
            textShadowRadius: deviceHeight / 300,
    },

    /*
      Displays player
    */
    playerContainer: {
        height: 6*deviceHeight/10,
        width: 4*deviceWidth/5,
        backgroundColor:'#4ebcc2',
        borderRadius: deviceWidth/50,
        padding: deviceWidth/30,
    },
    playerTitle: {
        height: deviceHeight/15,
        backgroundColor: '#bafff8',
        justifyContent: 'center',
        borderWidth: deviceWidth/100,
        borderColor: '#4ebcc2',
        borderRadius: deviceWidth/50,
    },
    playerTitleText: {
        textAlign: 'center',
        color:'purple',
        fontSize: deviceHeight/19,
        fontWeight: 'bold',
        fontFamily: 'monospace',
        marginBottom: deviceHeight/20,
        marginTop: deviceHeight/20,
    },
    playerBodyContainer: {
        height: deviceHeight/2,
        backgroundColor:'#bafff8',
        borderRadius: deviceWidth/50,
    },
    /* player's name, score  */
    rowplayerDataContainer: {
        height: deviceHeight/15,
        backgroundColor: '#bafff8',
        padding: 2,
        alignItems: 'center',
        flexDirection: 'row',
    },
    individualplayerDataContainer: {
        flex: 1,
        borderRadius: deviceWidth/20,
    },
    individualDataTitleText: {
        color: 'purple',
        fontSize: deviceWidth/17,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
    individualDataText: {
        color: 'purple',
        fontSize: deviceWidth/17,
        fontFamily: 'monospace',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    /*
      Play Again and Main Menu Button Formats
    */
    endScreenButtonContainer: {
        height: deviceHeight/10,
        width: 4*deviceWidth/5,
        backgroundColor:'#4ebcc2',
        borderRadius: deviceWidth/20,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    endScreenButton: {
        width: 3*deviceWidth/10,
        backgroundColor: '#bafff8',
        borderColor: 'purple',
        borderWidth: deviceHeight/200,
        borderRadius: deviceWidth/75,
        alignItems: 'center',
    },
    endScreenButtonText: {
        color: 'purple',
        fontWeight: 'bold',
        fontSize: deviceWidth/15,
    },
});
