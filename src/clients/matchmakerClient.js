import axios from 'axios';

function MatchmakerClient() {};

MatchmakerClient.prototype.getMatches = function(responses) {
    return new Promise(function(resolve, reject) {
        axios.post('https://matchmaker-server-staging.herokuapp.com/matchmaker/results', { responses }).then((res) => {
            resolve(res.data);
        });
    });
};

export default MatchmakerClient;
