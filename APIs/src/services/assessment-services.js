const getResponse=require("../utils/assessment-gpt-api.cjs");

class MentalHealthAssessmentServices{

    async gptResponse(data){
        try {
            const response=await getResponse(data);
            return response;

        } catch (error) {
            console.log("There is error in Services layer");
            throw ({error});
        }
    }


}


module.exports=MentalHealthAssessmentServices;


