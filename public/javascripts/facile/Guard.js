/**
 * Despite being fully static, guard is a class to use inheritance.
 * @param defense {function}
 * @returns {Promise<string>}
 */
export class Guard {

    constructor() {
        this.answers = guardAnswers
    }

    /**
     * The defense function. Must return a boolean or a string from the answers array.
     * @returns {Promise<string>}
     */
    async guard(route, params){
        return guardAnswers[0]
    }

    /**
     * Make sure the defense result is a string from the answers array readable by the router.
     * @returns {string}
     */
    getFormattedDefenseResult(defenseResult){
        // if the result is a boolean, return the corresponding answer
        if(defenseResult ===  true) return guardAnswers[0]
        else if (defenseResult === false) return guardAnswers[2]


        if(this.answers.includes(defenseResult)) return defenseResult
        else throw new Error(`answer must be a boolean or one of the following: ${guardAnswers.join(", ")}`)
    }


    /**
     *
     * @returns {Promise<string>}
     */
    async awaitAnswer(route, params) {
        let defenseResult = await this.guard(route, params)

        console.log("defenseResult", defenseResult)
        return this.getFormattedDefenseResult(defenseResult)
    }

}

const guardAnswers = [
    "allow", // router will continue normally.
    "redirect", // router will go to the redirect url specified in the view.
    "stop", // router do nothing.
]
