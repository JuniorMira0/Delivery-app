export default function CheckoutDetails() {
  return (
    <div>
      <h3>Detalhes e Endereços para Entrega</h3>

      <label htmlFor="sale">
        P. Vendedora Responsável
        <select data-testid="customer_checkout__select-seller">
          <option>
            Fulana Pereira
          </option>
        </select>
      </label>
      <label htmlFor="address">
        Endereço
        <input
          data-testid="customer_checkout__input-address"
          type="text"
        />
      </label>
      <label htmlFor="number">
        Número
        <input
          data-testid="customer_checkout__input-address-number"
          type="text"
        />
      </label>
    </div>
  );
}
