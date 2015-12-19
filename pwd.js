/**
 * Measure password
 * @author Ahmad Al Mughrabi
 * All right reserved 2015
 * */
 var pwd;
(function( o ) {
    var rank = {'TOO_SHORT' : 0, 'WEAK' : 1, 'MEDIUM' : 2, 'STRONG' : 3, 'VERY_STRONG' : 4};
    o.check = function( password, options ) {
        options = options || {};
        var upper     = /[A-Z]/,
            lower     = /[a-z]/,
            number    = /[0-9]/,
            special   = /[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/,
            minLength = options.minLength || 8,
            score     = 0;

        if(password.length < minLength) return rank.TOO_SHORT;

        if(upper.test(password))   score ++;
        if(lower.test(password))   score ++;
        if(number.test(password))  score ++;
        if(special.test(password)) score ++;
        if(score < 3)              score --;

        if(password.length > minLength) { score += Math.floor((password.length-minLength) / 2); }

        if(score < 3) return rank.WEAK;
        if(score < 4) return rank.MEDIUM;
        if(score < 6) return rank.STRONG;

        return rank.VERY_STRONG;
    };
    o.Rank = rank;
})(pwd = pwd || {});

