"use client"

import { ReviewCreate } from "@/app/actions/reviews";
import { Course } from "@/app/components/CourseInfo";
import FormReview from "@/app/components/forms/FormReview";
import { useActionState } from "react";

export default function Criticar({ course }: { course: Course }) {

    const [state, action] = useActionState(ReviewCreate, {
        errors: 0,
        success: 0,
        message: "",
        body: {
            course_id: course.course_id,
            year: 2013,
            section_number: 1,
            liked: false,
            comment: '',
            estimated_credits: course.credits
        },
    });

    return (
        <FormReview state={state} action={action}>
        </FormReview>
    )
}