import { describe, it, expect, vi, beforeEach } from "vitest";
import { submitBooking } from "../submitBooking";
import { getWeeksSpecials } from "../getWeeksSpecials";

describe("API Functions", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("submitBooking", () => {
    const validBookingData = {
      date: "2025-08-10",
      time: "19:00",
      guests: "4",
      name: "John Doe",
      email: "john@example.com",
      phone: "+1234567890",
      occasion: "birthday",
      specialRequests: "Window seat please",
    };

    it("should return success for valid booking data", async () => {
      vi.spyOn(Math, "random").mockReturnValue(0.5);

      const result = await submitBooking(validBookingData);

      expect(result.success).toBe(true);
      expect(result.message).toBe("Reservation booked successfully!");
      expect(result.reservationId).toMatch(/^RES-\d+$/);
      expect(result.details).toEqual({
        name: validBookingData.name,
        date: validBookingData.date,
        time: validBookingData.time,
        guests: validBookingData.guests,
      });
    });

    it("should return failure when random indicates no availability", async () => {
      vi.spyOn(Math, "random").mockReturnValue(0.05);

      const result = await submitBooking(validBookingData);

      expect(result.success).toBe(false);
      expect(result.message).toBe(
        "Sorry, this time slot is not available. Please try a different time."
      );
    });

    it("should fail when required fields are missing", async () => {
      const incompleteData = {
        date: "",
        time: "19:00",
        guests: "4",
        name: "",
        email: "john@example.com",
        phone: "+1234567890",
      };

      const result = await submitBooking(incompleteData);

      expect(result.success).toBe(false);
      expect(result.message).toBe("Please fill in all required fields");
    });

    it("should fail when date is missing", async () => {
      const data = { ...validBookingData, date: "" };
      const result = await submitBooking(data);

      expect(result.success).toBe(false);
      expect(result.message).toBe("Please fill in all required fields");
    });

    it("should fail when time is missing", async () => {
      const data = { ...validBookingData, time: "" };
      const result = await submitBooking(data);

      expect(result.success).toBe(false);
      expect(result.message).toBe("Please fill in all required fields");
    });

    it("should fail when guests is missing", async () => {
      const data = { ...validBookingData, guests: "" };
      const result = await submitBooking(data);

      expect(result.success).toBe(false);
      expect(result.message).toBe("Please fill in all required fields");
    });

    it("should fail when name is missing", async () => {
      const data = { ...validBookingData, name: "" };
      const result = await submitBooking(data);

      expect(result.success).toBe(false);
      expect(result.message).toBe("Please fill in all required fields");
    });

    it("should fail when email is missing", async () => {
      const data = { ...validBookingData, email: "" };
      const result = await submitBooking(data);

      expect(result.success).toBe(false);
      expect(result.message).toBe("Please fill in all required fields");
    });

    it("should fail when phone is missing", async () => {
      const data = { ...validBookingData, phone: "" };
      const result = await submitBooking(data);

      expect(result.success).toBe(false);
      expect(result.message).toBe("Please fill in all required fields");
    });

    it("should handle optional fields correctly", async () => {
      vi.spyOn(Math, "random").mockReturnValue(0.5);

      const dataWithoutOptionals = {
        date: "2025-08-10",
        time: "19:00",
        guests: "4",
        name: "John Doe",
        email: "john@example.com",
        phone: "+1234567890",
      };

      const result = await submitBooking(dataWithoutOptionals);

      expect(result.success).toBe(true);
      expect(result.reservationId).toMatch(/^RES-\d+$/);
    });

    it("should simulate realistic delay", async () => {
      vi.spyOn(Math, "random").mockReturnValue(0.5);

      const startTime = Date.now();
      await submitBooking(validBookingData);
      const endTime = Date.now();

      expect(endTime - startTime).toBeGreaterThanOrEqual(4990);
    });
  });

  describe("getWeeksSpecials", () => {
    it("should return weekly specials data", async () => {
      const result = await getWeeksSpecials();

      expect(result.success).toBe(true);
      expect(result.message).toBe("Week's specials loaded successfully");
      expect(result.data).toBeInstanceOf(Array);
      expect(result.data).toHaveLength(3);
    });

    it("should return correct structure for each special", async () => {
      const result = await getWeeksSpecials();

      result.data.forEach((special) => {
        expect(special).toHaveProperty("id");
        expect(special).toHaveProperty("name");
        expect(special).toHaveProperty("price");
        expect(special).toHaveProperty("rating");
        expect(special).toHaveProperty("prepTime");
        expect(special).toHaveProperty("image");
        expect(special).toHaveProperty("description");

        expect(typeof special.id).toBe("number");
        expect(typeof special.name).toBe("string");
        expect(typeof special.price).toBe("number");
        expect(typeof special.rating).toBe("number");
        expect(typeof special.prepTime).toBe("string");
        expect(typeof special.image).toBe("string");
        expect(typeof special.description).toBe("string");
      });
    });

    it("should return expected special items", async () => {
      const result = await getWeeksSpecials();

      const specialNames = result.data.map((special) => special.name);
      expect(specialNames).toContain("Greek Salad");
      expect(specialNames).toContain("Bruschetta");
      expect(specialNames).toContain("Lemon Dessert");
    });

    it("should have valid pricing", async () => {
      const result = await getWeeksSpecials();

      result.data.forEach((special) => {
        expect(special.price).toBeGreaterThan(0);
        expect(special.price).toBeLessThanOrEqual(50);
      });
    });

    it("should have valid ratings", async () => {
      const result = await getWeeksSpecials();

      result.data.forEach((special) => {
        expect(special.rating).toBeGreaterThanOrEqual(1);
        expect(special.rating).toBeLessThanOrEqual(5);
      });
    });

    it("should simulate realistic delay", async () => {
      const startTime = Date.now();
      await getWeeksSpecials();
      const endTime = Date.now();

      expect(endTime - startTime).toBeGreaterThanOrEqual(790);
    });
  });
});
