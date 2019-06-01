import axios from 'axios';

function MatchmakerClient() {};

MatchmakerClient.prototype.getMatches = function(responses) {
    console.log({responses});
    return new Promise(function(resolve, reject) {
        axios.post('https://matchmaker-server-staging.herokuapp.com/matchmaker/results', { responses }).then((res) => {
            console.log(res.data);
            resolve(res.data);
        });
    });
};

export default MatchmakerClient;
