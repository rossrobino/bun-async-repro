import { App, Get, Context } from "ovr";

const app = new App();

const Component = () => {
	// accessing async local storage works with `run:node` but not with `run:fetch`
	const c = Context.get();

	return <div>{c.url}</div>;
};

const page = new Get("/", () => {
	return (
		// also works when `main` is changed to a Fragment
		<main>
			<Component />
		</main>
	);
});

app.add(page);

export default app;
