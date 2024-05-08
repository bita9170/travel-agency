"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "../components/ui/button";
import { getLocationDetails } from "@/controllers/tripadvisorController";}

function ReviewForm() {
  const [formData, setFormData] = useState({
    userId: "",
    text: "",
    rating: "1",
    locationId: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [locationDetails, setLocationDetails] = useState(null);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const fetchLocationIdDetails = async () => {
    try {
      const details = await getLocationDetails(parseInt(formData.locationId), "de");
      setLocationDetails(details);
      setMessage("Location Details erfolgreich geladen!");
      setError(false);
    } catch (error: any) {
      console.error("Fehler beim Laden der Location Details:", error.message);
      setMessage("Fehler beim Laden der Location Details: " + (error.message || "Unbekannter Fehler"));
      setError(true);
    }
  };

  // Aufrufen der fetchLocationIdDetails, wenn sich locationId ändert
  useEffect(() => {
    if (formData.locationId) {
      fetchLocationIdDetails();
    }
  }, [formData.locationId]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/users/reviews", formData);
      setMessage("Review erfolgreich gespeichert!");
      setError(false);
      setFormData({
        userId: formData.userId,
        text: "",
        rating: "1",
        locationId: "",
      });
    } catch (error: any) {
      console.error(
        "Fehler beim Speichern des Reviews:",
        error.response?.data?.message
      );
      setMessage(
        "Fehler beim Speichern des Reviews: " +
          (error.response?.data?.message || "Unbekannter Fehler")
      );
      setError(true);
    }
  };

  return (
    <div
      style={{
        width: "400px",
        border: "2px solid green",
        padding: "20px",
        marginTop: "20px",
      }}
    >
      <h1>Review Formular</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="text">Text:</label>
          <textarea
            id="text"
            name="text"
            value={formData.text}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "2px solid green",
            }}
          />
        </div>
        <div>
          <label htmlFor="rating">Bewertung:</label>
          <select
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "2px solid green",
            }}
          >
            <option value="1">1*</option>
            <option value="2">2*</option>
            <option value="3">3*</option>
            <option value="4">4*</option>
          </select>
        </div>
        <Button
          style={{
            border: "2px solid green",
            padding: "10px",
            marginTop: "10px",
            width: "100%",
          }}
          type="submit"
        >
          Review Speichern
        </Button>
      </form>
      {message && (
        <p style={{ color: error ? "red" : "green", marginTop: "10px" }}>
          {message}
        </p>
      )}
    </div>
  );
}

export default ReviewForm;