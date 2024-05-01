import axios from 'axios'
import cors from 'cors'

const requestBody = "" ;

const requestHeaders = new Headers({"Content-Type" : "application/json"});

// Replace this with the primary/secondary key, AMLToken, or Microsoft Entra ID token for the endpoint
const apiKey = "ycq3PdoUW6subMGMJgzwelm5ACHrgsBp";

requestHeaders.append("Authorization", "Bearer " + apiKey)

requestHeaders.append("azureml-model-deployment", "gpt2-24");

const url = "https://rayen-hasni-dvwar.eastus2.inference.ml.azure.com/score";
const chatWithAzureML = async (question) => {
    
     
        await axios.post(url, {
            headers : requestHeaders,
            body: JSON.stringify({
                "inputs": question
            })

        }).then(response => { console.log("test==========", response.data); })
        .catch(error => { console.log(error); });
    
}
export { chatWithAzureML }


