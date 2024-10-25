// Components
import { Button } from "@/components"

export default function CTA({
    text,
    href = "javascript:;",
    variant = "default",
    className = "",
    icon = ""
}) {
    return (
        !icon ? (
            <Button asChild variant={variant} className={className} size="cta">
                <div dangerouslySetInnerHTML={{
                    __html: `<a href=${href} class="h-full flex items-center px-4">
                            ${text}
                        </a>` }}
                />
            </Button>
        ) : (
            <Button asChild variant={variant} className={className} size="cta">
                <div dangerouslySetInnerHTML={{
                    __html: `<a href=${href} class="h-full flex items-center px-4 gap-3">
                            <img src=${icon} alt="icon" />
                            <span>${text}</span>
                        </a>` }}
                />
            </Button>
        )
    )
}