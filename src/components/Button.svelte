<style>
    button {
        display: inline-block;
        padding: 0.3em 1.2em;
        border: none;
        background: red;
        color: white;
        font-weight: bold;
        border-radius: 0.2em;
        box-shadow: 0.2em 0.1em 0.4em rgba(0, 0, 0, 0.2);
        cursor: pointer;
        transition: transform 0.2s ease-in-out, background 0.2s ease-in-out;
        outline: none;
    }
    button:hover {
        transform: scale(1.04);
        background: rgb(224, 2, 2);
    }
</style>

<button>
    <slot />
</button>
