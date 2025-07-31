using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Tene.Data.Migrations
{
    /// <inheritdoc />
    public partial class init : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Category",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CategoryName = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Category", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "RequestsDetails",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FullName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Phone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FromAddress = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ToAddress = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FromFloor = table.Column<int>(type: "int", nullable: false),
                    ToFloor = table.Column<int>(type: "int", nullable: false),
                    FromElevator = table.Column<bool>(type: "bit", nullable: false),
                    ToElevator = table.Column<bool>(type: "bit", nullable: false),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RequestsDetails", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ProductsDetails",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProductName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Cob = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    CategoryId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductsDetails", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ProductsDetails_Category_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "Category",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ProductsFromUser",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProductId = table.Column<int>(type: "int", nullable: false),
                    Amount = table.Column<int>(type: "int", nullable: false),
                    RequestDetailsId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductsFromUser", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ProductsFromUser_ProductsDetails_ProductId",
                        column: x => x.ProductId,
                        principalTable: "ProductsDetails",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ProductsFromUser_RequestsDetails_RequestDetailsId",
                        column: x => x.RequestDetailsId,
                        principalTable: "RequestsDetails",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ProductsDetails_CategoryId",
                table: "ProductsDetails",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_ProductsFromUser_ProductId",
                table: "ProductsFromUser",
                column: "ProductId");

            migrationBuilder.CreateIndex(
                name: "IX_ProductsFromUser_RequestDetailsId",
                table: "ProductsFromUser",
                column: "RequestDetailsId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ProductsFromUser");

            migrationBuilder.DropTable(
                name: "ProductsDetails");

            migrationBuilder.DropTable(
                name: "RequestsDetails");

            migrationBuilder.DropTable(
                name: "Category");
        }
    }
}
