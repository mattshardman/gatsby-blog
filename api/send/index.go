package handler

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"

	"github.com/sendgrid/sendgrid-go"
	"github.com/sendgrid/sendgrid-go/helpers/mail"
)

type Message struct {
	Name    string `json:"name"`
	Email   string `json:"email"`
	Message string `json:"message"`
}

func Handler(w http.ResponseWriter, r *http.Request) {
	body, err := ioutil.ReadAll(r.Body)

	if err != nil {
		http.Error(w, err.Error(), 500)
		return
	}

	var msg Message
	err = json.Unmarshal(body, &msg)
	if err != nil {
		http.Error(w, err.Error(), 500)
		return
	}

	output, err := json.Marshal(msg)
	if err != nil {
		http.Error(w, err.Error(), 500)
		return
	}

	from := mail.NewEmail("Matt.cat", "someone@matt.cat")
	subject := "New message to matt.cat"
	to := mail.NewEmail("Example User", "matt@matt.cat")
	plainTextContent := msg.Name + msg.Email + msg.Message
	htmlContent := "<div><strong>Name</strong><p>" + msg.Name + "</p>" + "<strong>Email</strong><p>" + msg.Email + "</p>" + "<strong>Message</strong><p>" + msg.Message + "</p></div>"
	message := mail.NewSingleEmail(from, subject, to, plainTextContent, htmlContent)
	client := sendgrid.NewSendClient(os.Getenv("SENDGRID_API_KEY"))
	response, err := client.Send(message)
	if err != nil {
		log.Println(err)
	} else {
		fmt.Println(response.StatusCode)
		fmt.Println(response.Body)
		fmt.Println(response.Headers)
	}

	w.Header().Set("content-type", "application/json")
	w.Write(output)
}
