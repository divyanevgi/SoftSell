import { useState } from 'react';

export const useFormValidation = () => {
  const [errors, setErrors] = useState({});

  // Define validation rules
  const validationRules = {
    name: (value) => {
      if (!value.trim()) return 'Name is required';
      if (value.length < 2) return 'Name must be at least 2 characters';
      return null;
    },
    email: (value) => {
      if (!value.trim()) return 'Email is required';
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) return 'Please enter a valid email address';
      return null;
    },
    company: (value) => {
      if (!value.trim()) return 'Company name is required';
      return null;
    },
    licenseType: (value) => {
      if (!value.trim()) return 'Please select a license type';
      return null;
    }
  };

  // Validate a single field
  const validateField = (name, value) => {
    if (validationRules[name]) {
      const error = validationRules[name](value);
      setErrors(prev => ({
        ...prev,
        [name]: error || ''
      }));
      return !error;
    }
    return true;
  };

  // Validate the entire form
  const validateForm = (data) => {
    const newErrors = {};
    let isValid = true;

    Object.keys(data).forEach(key => {
      if (validationRules[key]) {
        const error = validationRules[key](data[key]);
        if (error) {
          newErrors[key] = error;
          isValid = false;
        }
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  return {
    errors,
    validateField,
    validateForm
  };
};