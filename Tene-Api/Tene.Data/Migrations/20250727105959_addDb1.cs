using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Tene.Data.Migrations
{
    /// <inheritdoc />
    public partial class addDb1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ProductId",
                table: "ProductsFromUser",
                newName: "ProductName");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ProductName",
                table: "ProductsFromUser",
                newName: "ProductId");
        }
    }
}
