import axios from 'axios';

function MatchmakerClient() {
};

MatchmakerClient.prototype.getMatches = function(answers) {
    return new Promise(function(resolve, reject) {
        axios.post('https://matchmaker-server-staging.herokuapp.com/matchmaker/results', answers).then((res) => {
            console.log(res.data);
            resolve(res.data);
        });
    });
};

export default MatchmakerClient;
