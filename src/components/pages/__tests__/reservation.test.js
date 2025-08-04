import { describe, it, expect, beforeEach } from "vitest";

const validateForm = (formData) => {
  const newErrors = {};

  if (!formData.date) {
    newErrors.date = "Date is required";
  } else {
    const selectedDate = new Date(formData.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      newErrors.date = "Please select a future date";
    }
  }

  if (!formData.time) {
    newErrors.time = "Time is required";
  }

  if (!formData.guests) {
    newErrors.guests = "Number of guests is required";
  }

  if (!formData.name.trim()) {
    newErrors.name = "Full name is required";
  } else if (formData.name.trim().length < 2) {
    newErrors.name = "Name must be at least 2 characters long";
  }

  if (!formData.email.trim()) {
    newErrors.email = "Email address is required";
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
  }

  if (!formData.phone.trim()) {
    newErrors.phone = "Phone number is required";
  } else {
    const phoneRegex = /^[+]?[1-9][\d]{0,15}$/;
    const cleanPhone = formData.phone.replace(/[\s\-()]/g, "");
    if (!phoneRegex.test(cleanPhone) || cleanPhone.length < 10) {
      newErrors.phone = "Please enter a valid phone number";
    }
  }

  return {
    isValid: Object.keys(newErrors).length === 0,
    errors: newErrors,
  };
};

describe("Reservation Form Validation", () => {
  let validFormData;

  beforeEach(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowString = tomorrow.toISOString().split("T")[0];

    validFormData = {
      date: tomorrowString,
      time: "19:00",
      guests: "4",
      name: "John Doe",
      email: "john@example.com",
      phone: "+1234567890",
      occasion: "birthday",
      specialRequests: "",
    };
  });

  describe("Date validation", () => {
    it("should pass with valid future date", () => {
      const result = validateForm(validFormData);
      expect(result.isValid).toBe(true);
      expect(result.errors.date).toBeUndefined();
    });

    it("should fail when date is missing", () => {
      const formData = { ...validFormData, date: "" };
      const result = validateForm(formData);
      expect(result.isValid).toBe(false);
      expect(result.errors.date).toBe("Date is required");
    });

    it("should fail when date is in the past", () => {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayString = yesterday.toISOString().split("T")[0];

      const formData = { ...validFormData, date: yesterdayString };
      const result = validateForm(formData);
      expect(result.isValid).toBe(false);
      expect(result.errors.date).toBe("Please select a future date");
    });
  });

  describe("Time validation", () => {
    it("should pass with valid time", () => {
      const result = validateForm(validFormData);
      expect(result.isValid).toBe(true);
      expect(result.errors.time).toBeUndefined();
    });

    it("should fail when time is missing", () => {
      const formData = { ...validFormData, time: "" };
      const result = validateForm(formData);
      expect(result.isValid).toBe(false);
      expect(result.errors.time).toBe("Time is required");
    });
  });

  describe("Guests validation", () => {
    it("should pass with valid guest count", () => {
      const result = validateForm(validFormData);
      expect(result.isValid).toBe(true);
      expect(result.errors.guests).toBeUndefined();
    });

    it("should fail when guests is missing", () => {
      const formData = { ...validFormData, guests: "" };
      const result = validateForm(formData);
      expect(result.isValid).toBe(false);
      expect(result.errors.guests).toBe("Number of guests is required");
    });
  });

  describe("Name validation", () => {
    it("should pass with valid name", () => {
      const result = validateForm(validFormData);
      expect(result.isValid).toBe(true);
      expect(result.errors.name).toBeUndefined();
    });

    it("should fail when name is missing", () => {
      const formData = { ...validFormData, name: "" };
      const result = validateForm(formData);
      expect(result.isValid).toBe(false);
      expect(result.errors.name).toBe("Full name is required");
    });

    it("should fail when name is only whitespace", () => {
      const formData = { ...validFormData, name: "   " };
      const result = validateForm(formData);
      expect(result.isValid).toBe(false);
      expect(result.errors.name).toBe("Full name is required");
    });

    it("should fail when name is too short", () => {
      const formData = { ...validFormData, name: "A" };
      const result = validateForm(formData);
      expect(result.isValid).toBe(false);
      expect(result.errors.name).toBe(
        "Name must be at least 2 characters long"
      );
    });

    it("should pass with minimum valid name length", () => {
      const formData = { ...validFormData, name: "Jo" };
      const result = validateForm(formData);
      expect(result.isValid).toBe(true);
      expect(result.errors.name).toBeUndefined();
    });
  });

  describe("Email validation", () => {
    it("should pass with valid email", () => {
      const result = validateForm(validFormData);
      expect(result.isValid).toBe(true);
      expect(result.errors.email).toBeUndefined();
    });

    it("should fail when email is missing", () => {
      const formData = { ...validFormData, email: "" };
      const result = validateForm(formData);
      expect(result.isValid).toBe(false);
      expect(result.errors.email).toBe("Email address is required");
    });

    it("should fail when email is only whitespace", () => {
      const formData = { ...validFormData, email: "   " };
      const result = validateForm(formData);
      expect(result.isValid).toBe(false);
      expect(result.errors.email).toBe("Email address is required");
    });

    it("should fail with invalid email format", () => {
      const invalidEmails = [
        "invalid-email",
        "test@",
        "@example.com",
        "test@example",
        "test.example.com",
        "test@@example.com",
      ];

      invalidEmails.forEach((email) => {
        const formData = { ...validFormData, email };
        const result = validateForm(formData);
        expect(result.isValid).toBe(false);
        expect(result.errors.email).toBe("Please enter a valid email address");
      });
    });

    it("should pass with various valid email formats", () => {
      const validEmails = [
        "test@example.com",
        "user.name@domain.com",
        "user+tag@example.org",
        "firstname.lastname@company.co.uk",
      ];

      validEmails.forEach((email) => {
        const formData = { ...validFormData, email };
        const result = validateForm(formData);
        expect(result.isValid).toBe(true);
        expect(result.errors.email).toBeUndefined();
      });
    });
  });

  describe("Phone validation", () => {
    it("should pass with valid phone number", () => {
      const result = validateForm(validFormData);
      expect(result.isValid).toBe(true);
      expect(result.errors.phone).toBeUndefined();
    });

    it("should fail when phone is missing", () => {
      const formData = { ...validFormData, phone: "" };
      const result = validateForm(formData);
      expect(result.isValid).toBe(false);
      expect(result.errors.phone).toBe("Phone number is required");
    });

    it("should fail when phone is only whitespace", () => {
      const formData = { ...validFormData, phone: "   " };
      const result = validateForm(formData);
      expect(result.isValid).toBe(false);
      expect(result.errors.phone).toBe("Phone number is required");
    });

    it("should fail with too short phone number", () => {
      const formData = { ...validFormData, phone: "123456789" };
      const result = validateForm(formData);
      expect(result.isValid).toBe(false);
      expect(result.errors.phone).toBe("Please enter a valid phone number");
    });

    it("should pass with various valid phone formats", () => {
      const validPhones = [
        "+1234567890",
        "1234567890",
        "+1 (234) 567-8900",
        "234-567-8900",
        "(234) 567-8900",
        "+44 20 7946 0958",
        "+33 1 42 86 83 26",
      ];

      validPhones.forEach((phone) => {
        const formData = { ...validFormData, phone };
        const result = validateForm(formData);
        expect(result.isValid).toBe(true);
        expect(result.errors.phone).toBeUndefined();
      });
    });

    it("should fail with invalid phone formats", () => {
      const invalidPhones = [
        "abc123",
        "++1234567890",
        "0123456789",
        "123-456-789",
        "123",
      ];

      invalidPhones.forEach((phone) => {
        const formData = { ...validFormData, phone };
        const result = validateForm(formData);
        expect(result.isValid).toBe(false);
        expect(result.errors.phone).toBe("Please enter a valid phone number");
      });
    });
  });

  describe("Complete form validation", () => {
    it("should pass with all valid data", () => {
      const result = validateForm(validFormData);
      expect(result.isValid).toBe(true);
      expect(Object.keys(result.errors)).toHaveLength(0);
    });

    it("should fail with multiple missing fields", () => {
      const formData = {
        date: "",
        time: "",
        guests: "",
        name: "",
        email: "",
        phone: "",
        occasion: "",
        specialRequests: "",
      };

      const result = validateForm(formData);
      expect(result.isValid).toBe(false);
      expect(Object.keys(result.errors)).toHaveLength(6);
      expect(result.errors.date).toBe("Date is required");
      expect(result.errors.time).toBe("Time is required");
      expect(result.errors.guests).toBe("Number of guests is required");
      expect(result.errors.name).toBe("Full name is required");
      expect(result.errors.email).toBe("Email address is required");
      expect(result.errors.phone).toBe("Phone number is required");
    });

    it("should pass when optional fields are empty", () => {
      const formData = {
        ...validFormData,
        occasion: "",
        specialRequests: "",
      };

      const result = validateForm(formData);
      expect(result.isValid).toBe(true);
      expect(Object.keys(result.errors)).toHaveLength(0);
    });
  });
});
