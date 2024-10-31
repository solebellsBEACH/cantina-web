'use client';
import { LibComponents } from "../core/components";
import { Container } from "./styles";

export default function Product() {
    return <Container className="p-10">
        <LibComponents.CommonComponents.BreadcrumbContent>
            <h1>child</h1>
        </LibComponents.CommonComponents.BreadcrumbContent>
    </Container>
}