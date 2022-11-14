/**
 *
 * @param defense {function}
 * @returns {Promise<string>}
 */
export class Guard {

    static answers = [
        "allow", // router will continue normally.
        "redirect", // router will stay on the current view.
        "stop", // router will go to the first view in it's viewClasses array.
    ]

    static defense = async ()=>{
        return true
    }

    /**
        * Override this method to add an intermediate action between the defense and the formatting of the result, for example a login modal.
     * @param defenseResult
     * @returns {Promise<*>}
     */
    static async intermediateAction(defenseResult){
        return defenseResult
    }

    /**
     * Make sure the defense result is a string from the answers array readable by the router.
     * @param defenseResult
     * @returns {string}
     */
    static getFormattedDefenseResult(defenseResult){
        if(defenseResult ===  true) return this.answers[0]
        else if (defenseResult === false) return this.answers[1]

        if(!this.answers.includes(defenseResult)) throw new Error(`answer must be a boolean or one of the following: ${answers.join(", ")}`)
    }


    /**
     *
     * @returns {Promise<string>}
     */
    static async defend() {
        let defenseResult = this.defense()

        let mitigatedDefenseResult = await this.intermediateAction(defenseResult)

        return  this.getFormattedDefenseResult(mitigatedDefenseResult)
    }

}


