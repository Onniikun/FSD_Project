import { useMemo, useState } from "react";

export type ValidatorFn<T> = (value: T) => string | null;

/**
 * - Store current field value (value)
 * - Track whether the user has interacted with the field (touched)
 * - Store validation messages (errors) for display
 * - Provide standard handlers (onChange, onBlur)
 * - Provide helper actions (validateNow, reset)
 */
export function useFormField<T>(
    initialValue: T,
    validator?: ValidatorFn<T>
) {
    const [value, setValue] = useState<T>(initialValue);
    const [touched, setTouched] = useState<boolean>(false);
    const [errors, setErrors] = useState<string[]>([]);

    const runValidation = (nextValue: T) => {
        if (!validator) {
            setErrors([]);
            return [];
        }
        const result = validator(nextValue);
        const errorArray = result ? [result] : [];
        setErrors(errorArray);
        return errorArray;
    };

    /**
     * onChange: git rebase origin/develop
     * - updates value
     * - optionally updates errors if user has already interacted
     */
    const onChange = (nextValue: T) => {
        setValue(nextValue);
        if (touched) runValidation(nextValue);
    }

    /**
     * onBlur: call from input onBlur handlers.
     * - marks field touched
     * - validates and stores errors (if validator provided)
     */
    const onBlur = () => {
        if (!touched) setTouched(true);
        runValidation(value);
    };

    /**
     * validateNow: call on submit.
     * - forces validation + touched
     * - returns true if valid (no errors)
     */
    const validateNow = (): boolean => {
        setTouched(true);
        const result = runValidation(value);
        return result.length === 0;
    };

    /**
     * reset: call after successful submit
     */
    const reset = () => {
        setValue(initialValue);
        setTouched(false);
        setErrors([]);
    };

    const isValid = useMemo(() => errors.length === 0, [errors]);

    return {
        // state
        value,
        touched,
        errors,
        isValid,

        // actions/handlers
        setValue,     // sometimes useful for programmatic changes
        onChange,     // use for input changes
        onBlur,       // use for input blur
        validateNow,  // use on form submit
        reset,        // reset after successful submit
    };
}