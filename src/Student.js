class Student {

    constructor(session, account) {

        this.session = session;
        this.id      = account.id;

    }

    /**
    * Retrieves the student's grades
    * @param {Number} [quarter] (Optional) If you want a specific quarter
    */
    async getNotes(quarter) {
        try {
            const response = await this.session.request(
                `https://api.ecoledirecte.com/v3/eleves/${this.id}/notes.awp?verbe=get&`);

            if (quarter)
                return response.data.data.periodes.find(p => p.idPeriode === `A00${quarter}`)

            return response.data.data.notes
        } catch (err) {
            throw new Error(err);
        }
    }


    /**
     * Retrieves the student's Homeworks
     */
    async getHomeworks() {
        try {
            const response = await this.session.request(
                `https://api.ecoledirecte.com/v3/Eleves/${this.id}/cahierdetexte.awp?verbe=get&`);

            return response.data.data;
        } catch (err) {
            throw new Error(err);;
        }
    }

    /**
     * Retrieves the student's Schedule
     * @param {Date} start Starting date
     * @param {Date} end   Ending date
     */
    async getSchedule(start, end) {
        try {
            const response = await this.session.request(
                `https://api.ecoledirecte.com/v3/E/${this.id}/emploidutemps.awp?verbe=get&`,
                {
                    dateDebut: start,
                    dateFin: end
                }
            );

            return response.data.data;
        } catch (err) {
            throw new Error(err);;
        }
    }

    /**
     * Retrieves the student's SchoolLife
     */
    async getSchoolLife() {
        try {
            const response = await this.session.request(
                `https://api.ecoledirecte.com/v3/eleves/${this.id}/viescolaire.awp?verbe=get&`,
            );

            return response.data.data;
        } catch (err) {
            throw new Error(err);
        }
    }

    /**
     * Retrieves the student's messages
     */
    async getMessages() {

        try {
            const response = await this.session.request(
                `https://api.ecoledirecte.com/v3/eleves/${this.id}/messages.awp?verbe=getall&typeRecuperation=received&orderBy=date&order=desc&page=0&itemsPerPage=20&onlyRead=&query=&idClasseur=0`,
            );

            return response.data.data;
        } catch (err) {
            throw new Error(err);
        }

    }

    /**
     * Retrieves the student's cloud elements
     */
    async getCloud() {
        try {
            const response = await this.session.request(
                `https://api.ecoledirecte.com/v3/cloud/E/${this.id}.awp?verbe=get&`,
            );

            return response.data
        } catch (err) {
            throw new Error(err);
        }
    }

     /**
     * Retrieves the student's documents
     */
    async getDocuments() {
        try {
            const response = await this.session.request(
                `https://api.ecoledirecte.com/v3/elevesDocuments.awp?verbe=get&`,
            );

            return response.data
        } catch (err) {
            throw new Error(err);
        }
    }
}

module.exports = Student